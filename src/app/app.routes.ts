import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';

export const routes: Routes = [

    {path: "", component: HomeComponent},
    {path: "perfil", component: PerfilComponent},

];
