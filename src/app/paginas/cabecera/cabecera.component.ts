import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

  userData: any;  constructor(private authService: AuthService){
    
    this.authService.userData$.subscribe((data) => {
      this.userData = data;
      console.log('Datos recibidos en el componente:', this.userData);
    });
    
  }
  cerrarSesion(){
    this.authService.cerrarSesion()

  }
}
