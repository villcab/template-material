import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout';

export const MATERIAL_ROUTES: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', loadChildren: './pages/login/login.module#LoginModule' },
  {
    path: 'admin', component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
    ]
  }
];
