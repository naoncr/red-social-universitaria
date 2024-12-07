import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule, NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf,   FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export  class LoginComponent {
  state = LoginCompState.LOGIN;
  //registro
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(){

  }



  iniciarClick(){
    

  }
  registrarClick(){
    
   // this.authService.register
   console.log('Correo:', this.email);
   console.log('Contraseña:', this.password);
   console.log('Confirmar contraseña:', this.confirmPassword);

  }








  ForgotPassClick() {
    this.state = LoginCompState.FORGOT_PASSWORD;
  }
  CreateAccountClick() {
    this.state = LoginCompState.REGISTER;
  }
  LoginClick() {
    this.state = LoginCompState.LOGIN;
  }

  isLoginState() {
    return this.state == LoginCompState.LOGIN;
  }
  isRegisterState() {
    return this.state == LoginCompState.REGISTER;
  }
  isForgotPasswordState() {
    return this.state == LoginCompState.FORGOT_PASSWORD;
  }
}

export enum LoginCompState {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD

}