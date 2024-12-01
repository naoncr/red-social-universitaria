import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importar RouterModule
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CabeceraComponent, BarraLateralComponent],  // Agregar RouterModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Red Social Universitaria';
}
