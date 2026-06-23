// Generates src/firebase-messaging-sw.js from the template + the local (gitignored)
// firebase.json, so the real Firebase config never gets committed to git.
const fs = require('fs');
const path = require('path');

const envDir = path.join(__dirname, '..', 'src', 'environments');
const realConfigPath = path.join(envDir, 'firebase.json');
const exampleConfigPath = path.join(envDir, 'firebase.example.json');
const templatePath = path.join(__dirname, '..', 'src', 'firebase-messaging-sw.template.js');
const outputPath = path.join(__dirname, '..', 'src', 'firebase-messaging-sw.js');

const configPath = fs.existsSync(realConfigPath) ? realConfigPath : exampleConfigPath;
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const replacements = {
  __FIREBASE_API_KEY__: config.apiKey ?? '',
  __FIREBASE_AUTH_DOMAIN__: config.authDomain ?? '',
  __FIREBASE_PROJECT_ID__: config.projectId ?? '',
  __FIREBASE_STORAGE_BUCKET__: config.storageBucket ?? '',
  __FIREBASE_MESSAGING_SENDER_ID__: config.messagingSenderId ?? '',
  __FIREBASE_APP_ID__: config.appId ?? '',
};

let output = fs.readFileSync(templatePath, 'utf8');
for (const [placeholder, value] of Object.entries(replacements)) {
  output = output.split(placeholder).join(value);
}

fs.writeFileSync(outputPath, output);
console.log(`Generated ${path.relative(process.cwd(), outputPath)} from ${path.relative(process.cwd(), configPath)}`);
