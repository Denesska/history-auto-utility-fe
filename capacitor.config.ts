import { CapacitorConfig } from '@capacitor/cli';

// CAP_WEB_DIR lets `cap sync` pick up the right web build (www vs www-test)
// depending on which environment the Android app should point to.
const config: CapacitorConfig = {
  appId: (process.env.CAP_APP_ID || 'com.denhau.hau').trim(),
  appName: (process.env.CAP_APP_NAME || 'history-auto-utility').trim(),
  webDir: (process.env.CAP_WEB_DIR || 'www').trim(),
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SystemBars: {
      insetsHandling: 'css',
      style: 'DEFAULT',
    },
  },
};

export default config;
