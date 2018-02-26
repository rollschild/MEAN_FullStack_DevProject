// this file bootstrps the application
// when importing bundle.js, main.ts gets excecuted first

import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
