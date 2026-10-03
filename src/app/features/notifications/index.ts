/**
 * Public entry point for the notifications feature. Other features and the
 * shell must import notifications only through this barrel — never via a
 * deep `@hau/features/notifications/**` path. See "Feature boundaries" in
 * CLAUDE.md.
 */
export { NotificationsPanelComponent } from './notifications-panel/notifications-panel.component';
