importScripts('https://www.gstatic.com/firebasejs/12.15.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.15.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: '__FIREBASE_API_KEY__',
  authDomain: '__FIREBASE_AUTH_DOMAIN__',
  projectId: '__FIREBASE_PROJECT_ID__',
  storageBucket: '__FIREBASE_STORAGE_BUCKET__',
  messagingSenderId: '__FIREBASE_MESSAGING_SENDER_ID__',
  appId: '__FIREBASE_APP_ID__',
});

const messaging = firebase.messaging();

const NAVIGABLE_TYPES = ['CAR_SHARED', 'CAR_ACCESS_ROLE_CHANGED', 'CAR_ACCESS_ACCEPTED'];

function buildUrl(type, dataJson) {
  try {
    const data = JSON.parse(dataJson || '{}');
    if (NAVIGABLE_TYPES.includes(type) && data.carId != null) {
      return `/main/cars/details/${data.carId}`;
    }
  } catch {
    // fall through to default route below
  }
  return '/main/overview';
}

// Shows a system notification when a push arrives while the site/tab isn't focused.
// Payload is data-only (see push.service.ts) so Chrome doesn't also auto-display
// it itself — this handler is the only thing that shows a notification.
messaging.onBackgroundMessage((payload) => {
  const data = payload.data ?? {};
  self.registration.showNotification(data.title ?? 'Notificare nouă', {
    body: data.body ?? '',
    icon: '/assets/icon/favicon.svg',
    data,
  });
});

// Opens (or focuses) the app and navigates to the relevant page when the user taps the notification.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const data = event.notification.data || {};
  const url = buildUrl(data.type, data.payload);

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientsArr) => {
      const origin = self.location.origin;
      for (const client of clientsArr) {
        if (client.url.startsWith(origin) && 'focus' in client) {
          client.postMessage({ type: 'navigate', url });
          return client.focus();
        }
      }
      return self.clients.openWindow(origin + url);
    }),
  );
});
