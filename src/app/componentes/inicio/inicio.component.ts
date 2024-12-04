import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  publicaciones = [
    { autor: 'Juan Pérez', contenido: 'Mi primera publicación en la red social!', imagen: '' },
    { autor: 'María López', contenido: 'Estudiando para el examen final. 😓', imagen: '' },
    { autor: 'Carlos Díaz', contenido: '¡Gran charla sobre inteligencia artificial hoy!', imagen: 'https://via.placeholder.com/150' }
  ];
}

