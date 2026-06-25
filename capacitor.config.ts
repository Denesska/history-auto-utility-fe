import { CapacitorConfig } from '@capacitor/cli';

// CAP_WEB_DIR lets `cap sync` pick up the right web build (www vs www-test)
// depending on which environment the Android app should point to.
const config: CapacitorConfig = {
  appId: 'com.denhau.hau',
  appName: 'history-auto-utility',
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
