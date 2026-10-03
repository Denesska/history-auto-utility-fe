import { computed, Injectable, signal } from '@angular/core';

/** Mirrors the backend `ctx` claim returned by `GET /auth/me` / `POST /auth/context` (see ACCOUNT-CONTEXT.md). */
export type SessionContext =
    | { type: 'personal' }
    | { type: 'business'; orgId: number | null; orgRole?: string; orgName?: string | null };

/**
 * Single source of truth for "which environment is this session in" — personal
 * or business (and which organization). Written only by AuthService (from
 * /auth/me, login and POST /auth/context responses, and cleared on logout);
 * everything else just reads the signals.
 */
@Injectable({ providedIn: 'root' })
export class SessionContextService {
    private readonly _context = signal<SessionContext | null>(null);

    /** Current context, or null while unknown (not logged in / /auth/me not loaded yet). */
    readonly context = this._context.asReadonly();
    readonly isBusiness = computed(() => this._context()?.type === 'business');
    readonly isPersonal = computed(() => this._context()?.type === 'personal');
    /** Active organization id, or null (personal, or business with no org picked yet). */
    readonly activeOrgId = computed(() => {
        const ctx = this._context();
        return ctx?.type === 'business' ? ctx.orgId : null;
    });
    readonly activeOrgName = computed(() => {
        const ctx = this._context();
        return ctx?.type === 'business' ? (ctx.orgName ?? null) : null;
    });
    readonly activeOrgRole = computed(() => {
        const ctx = this._context();
        return ctx?.type === 'business' ? (ctx.orgRole ?? null) : null;
    });
    /** Business login done but no organization chosen yet -> the picker must be shown. */
    readonly needsOrgSelection = computed(() => {
        const ctx = this._context();
        return ctx?.type === 'business' && ctx.orgId == null;
    });

    set(ctx: SessionContext | null | undefined): void {
        this._context.set(ctx ?? null);
    }

    clear(): void {
        this._context.set(null);
    }
}
