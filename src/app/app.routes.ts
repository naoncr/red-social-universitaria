import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { FeedComponent } from './paginas/feed/feed.component';
import { EventoComponent } from './paginas/evento/evento.component';
import { GrupoComponent } from './paginas/grupo/grupo.component';

export const routes: Routes = [

    {path: "", component: FeedComponent},
    {path: "perfil", component: PerfilComponent},
    {path: "eventos", component: EventoComponent},
    {path: "grupos", component: GrupoComponent},

];
