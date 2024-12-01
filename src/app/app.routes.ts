import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';

export const routes: Routes = [
<<<<<<< HEAD
  {
    path: 'auth',
    loadChildren: () =>
      import('./paginas/auth.routes').then(m => m.default),
  },
  { path: '', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
];
=======
  { path: '', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
];
 
>>>>>>> d814ea4de28bf892f2a07a88b2bbc472dd03d3df
