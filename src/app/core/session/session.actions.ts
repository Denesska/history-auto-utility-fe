/**
 * Dispatched by AuthService whenever a session starts or changes (login,
 * context switch, logout) so every feature state that holds user-scoped
 * data can drop it without auth having to know which features exist or
 * import their actions directly.
 */
export class SessionReset {
    static readonly type = '[Session] Reset';
}
