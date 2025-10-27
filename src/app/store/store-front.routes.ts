import { Routes } from '@angular/router';
import { StoreFrontLayout } from './layouts/store-front-layout/store-front-layout';

export const storeFrontRoutes: Routes = [
  {
    path: '',
    component: StoreFrontLayout,
    children: [],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default storeFrontRoutes;
