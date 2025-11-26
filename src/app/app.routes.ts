import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.page').then(m => m.Homepage),
      },
      {
        path: 'favoritos',
        loadComponent: () =>
          import('./pages/favoritos/favoritos.page').then(m => m.FavoritosPage),
      },
      {
        path: 'ajustes',
        loadComponent: () =>
          import('./pages/ajustes/ajustes.page').then(m => m.AjustesPage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
