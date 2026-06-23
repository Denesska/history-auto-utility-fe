// firebase.json is gitignored (contains real secrets, shared across dev/test/prod for now) — see firebase.example.json for the expected shape.
import firebaseConfig from './firebase.json';

export const environment = {
  production: true,
  apiUrl: 'https://api.denhau.ro/api',
  imageBaseUrl: 'https://api.denhau.ro',
  firebase: firebaseConfig,
};