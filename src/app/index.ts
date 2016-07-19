// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import { AppState } from './app.service';

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  GOOGLE_MAPS_PROVIDERS
];
