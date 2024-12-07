import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environment/environment prod';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp'
import { LoginComponent } from "./paginas/login/login.component";
import { CabeceraComponent } from './paginas/cabecera/cabecera.component';
import { AuthService } from './servicios/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,NgIf, CabeceraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isUserLoggedIn  : boolean = false;
  title = 'RedSocial';
  constructor(private authService: AuthService){
    
    this.subscribeToAuthStatus();

  }

 
  subscribeToAuthStatus() {
    this.authService.userStatus$.subscribe((isLoggedIn) => {
      this.isUserLoggedIn = isLoggedIn;
      console.log('¿Usuario logueado?:', this.isUserLoggedIn);
      if (isLoggedIn) {
        const user = this.authService.getCurrentUser();
        console.log('Usuario actual:', user?.email);
      }
    });
  }

  


  
  

 


}
