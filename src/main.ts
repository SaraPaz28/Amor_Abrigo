import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { platform } from 'os';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
