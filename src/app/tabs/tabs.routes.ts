import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('../tabs/tabs.page').then(m => m.TabsPage), 
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then(m => m.Homepage),
      },
      {
        path: 'favoritos',
        loadComponent: () =>
          import('../pages/favoritos/favoritos.page').then(m => m.FavoritosPage),
      },
      {
        path: 'ajustes',
        loadComponent: () =>
          import('../pages/ajustes/ajustes.page').then(m => m.AjustesPage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
