// Proxy dev setup: the app runs on localhost:4200 but all API/upload/socket
// traffic is same-origin (relative URLs) and forwarded to https://dev.denhau.ro
// by the Angular dev-server proxy (see proxy.config.json). This makes the
// browser treat everything as first-party, so cookies + Bearer both work and
// there is no CORS. Auth: seed a dev JWT (see AuthService.init) — the app then
// sends it as `Authorization: Bearer` to the real dev backend.

// firebase.json is gitignored (contains real secrets) — see firebase.example.json.
import firebaseConfig from './firebase.json';

export const environment = {
  production: false,
  apiUrl: '/api',
  imageBaseUrl: '',
  firebase: firebaseConfig,
};
