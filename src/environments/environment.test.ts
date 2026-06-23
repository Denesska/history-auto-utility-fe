// firebase.json is gitignored (contains real secrets, shared across dev/test/prod for now) — see firebase.example.json for the expected shape.
import firebaseConfig from './firebase.json';

export const environment = {
  production: true,
  apiUrl: 'https://test.denhau.ro/api',
  imageBaseUrl: 'https://test.denhau.ro',
  firebase: firebaseConfig,
};
