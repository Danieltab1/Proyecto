import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';


const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
const isDark = prefersColorScheme.matches;

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({
      mode: 'ios' 
    }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
}).then(() => {

  document.body.classList.toggle('dark', false);
  document.documentElement.classList.toggle('ion-palette-dark', false);
  document.documentElement.style.setProperty('color-scheme', 'light');
  
  if (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'light') {
    localStorage.setItem('theme', 'light');
  }
});