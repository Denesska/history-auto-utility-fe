import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';
import { Subject, of, throwError } from 'rxjs';

// Load Angular's JIT compiler before importing the transpiled injectable.
await import('@angular/compiler');

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.resolve(scriptDir, '../src/app/core/nav-destination-history.service.ts');
const temporaryModulePath = path.join(scriptDir, '.nav-history-service-test.mjs');
const endpoint = 'https://api.example.test/api/n/test-channel/history';
const cacheKey = `hau.nav-destination-history:${endpoint}`;

class MemoryStorage {
  values = new Map();
  getItem(key) { return this.values.get(key) ?? null; }
  setItem(key, value) { this.values.set(key, String(value)); }
  removeItem(key) { this.values.delete(key); }
}

globalThis.localStorage = new MemoryStorage();

function destination(id, name, lat = null, lon = null, ts = 1_800_000_000) {
  return { id, name, lat, lon, ts };
}

const source = await fs.readFile(sourcePath, 'utf8');
const transpiled = ts.transpileModule(source, {
  compilerOptions: {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ES2022,
    experimentalDecorators: true,
    useDefineForClassFields: false,
  },
}).outputText.replace(
  "import { environment } from '../../environments/environment';",
  "const environment = { apiUrl: 'https://api.example.test/api', navRelaySlug: 'test-channel' };",
);

await fs.writeFile(temporaryModulePath, transpiled, 'utf8');
try {
  const { NavDestinationHistoryService } = await import(pathToFileURL(temporaryModulePath).href);

  // Invalid cache JSON is ignored and cannot prevent the page from loading.
  localStorage.setItem(cacheKey, '{broken json');
  const malformedCacheService = new NavDestinationHistoryService({ get: () => of({ items: [] }), post: () => of({}) });
  assert.deepEqual(malformedCacheService.items(), []);

  // Fetch normalization: newest coordinate event wins, name-only entries remain
  // distinct, partial coordinates with a name become name-only, and bad records drop.
  localStorage.setItem(cacheKey, JSON.stringify([
    destination(4, 'Older saved place', 1, 1),
  ]));
  const remoteItems = [
    destination(7, 'Rounded older', 10.000004, 20),
    destination(8, 'Rounded latest', 10.0000049, 20),
    destination(9, 'Same branch', null, null),
    destination(10, 'Same branch', null, null),
    destination(11, null, 42, null),
    destination(12, 'Partial coordinates', 44, null),
    destination(0, 'Zero ID', 2, 2),
    destination(2_147_483_648, 'Too large ID', 3, 3),
    destination(Number.MAX_SAFE_INTEGER + 1, 'Unsafe ID', 4, 4),
    destination(13, '   ', null, null),
    destination(14, null, null, null),
    { ...destination(15, 'Invalid timestamp', 5, 5), ts: Infinity },
  ];
  let requestedUrl;
  const http = {
    get: url => { requestedUrl = url; return of({ items: remoteItems }); },
    post: () => of({}),
  };
  const service = new NavDestinationHistoryService(http);
  await service.refresh();
  assert.equal(requestedUrl, endpoint);
  assert.deepEqual(service.items().map(item => item.id), [12, 10, 9, 8, 4]);
  assert.equal(service.items().find(item => item.id === 12).lat, null);
  assert.equal(service.items().find(item => item.id === 12).lon, null);
  assert.equal(service.items().find(item => item.id === 8).name, 'Rounded latest');
  assert.equal(localStorage.getItem(cacheKey), JSON.stringify(service.items()));

  // Response bounds remain at 100 distinct records, ordered by descending ID.
  http.get = () => of({ items: Array.from({ length: 125 }, (_, index) => destination(index + 1, `Place ${index + 1}`, index / 2, index / 2)) });
  await service.refresh();
  assert.equal(service.items().length, 100);
  assert.equal(service.items()[0].id, 125);
  assert.equal(service.items().at(-1).id, 26);

  // A failed network refresh preserves cache and reports offline state.
  const cachedBeforeOffline = service.items();
  http.get = () => throwError(() => new Error('offline'));
  await service.refresh();
  assert.equal(service.failed(), true);
  assert.deepEqual(service.items(), cachedBeforeOffline);

  // A share arriving while an older GET is pending survives that response.
  const pendingResponse = new Subject();
  http.get = () => pendingResponse;
  const staleRefresh = service.refresh();
  const share = service.shareSucceeded(destination(200, 'Newly shared place', 50, 50));
  pendingResponse.next({ items: [destination(199, 'Server snapshot', 51, 51)] });
  pendingResponse.complete();
  await Promise.all([staleRefresh, share]);
  assert.deepEqual(service.items().slice(0, 2).map(item => item.id), [200, 199]);

  // Resend posts only the saved ID, immediately applies the appended DTO, then
  // keeps it through refresh even if that GET has not caught up yet.
  let postedUrl;
  let postedBody;
  http.post = (url, body) => {
    postedUrl = url;
    postedBody = body;
    return of(destination(201, 'Resent place', 52, 52));
  };
  http.get = () => of({ items: [destination(200, 'Newly shared place', 50, 50)] });
  await service.resend(200);
  assert.equal(postedUrl, `${endpoint}/200/resend`);
  assert.deepEqual(postedBody, {});
  assert.deepEqual(service.items().slice(0, 2).map(item => item.id), [201, 200]);

  console.log('nav destination history service checks passed');
} finally {
  await fs.rm(temporaryModulePath, { force: true });
}
