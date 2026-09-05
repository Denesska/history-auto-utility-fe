// firebase.json is gitignored (contains real secrets, shared across dev/test/prod for now) — see firebase.example.json for the expected shape.
import firebaseConfig from './firebase.json';
// relay.json is gitignored (holds the unguessable nav-relay slug shared with the car) — see relay.example.json.
import relayConfig from './relay.json';

export const environment = {
  production: true,
  apiUrl: 'https://api.denhau.ro/api',
  imageBaseUrl: 'https://api.denhau.ro',
  firebase: firebaseConfig,
  navRelaySlug: relayConfig.slug,
};