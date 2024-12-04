import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./paginas/auth.routes').then(m => m.default),
  },
  { path: '', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
];
