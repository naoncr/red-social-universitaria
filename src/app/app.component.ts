import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environment/environment prod';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp'
import { LoginComponent } from "./paginas/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RedSocial';
  constructor(){
    FirebaseTSApp.init(environment.firebaseConfig);
  }
}
