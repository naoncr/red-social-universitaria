import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';


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
  apellido: string = '';
  carrera: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  //login
  emailr: string = ''; // Variable para capturar el correo
  passwordr: string = ''; // Variable para capturar la contraseña

  constructor(private authService: AuthService){

  }



  iniciarClick(){
    if(this.vacio(this.emailr) && this.vacio(this.passwordr) ){
      this.authService.login(this.emailr, this.passwordr)
    }else{
      alert("Completa todos los campos")
    }
    

  }
  registrarClick(){
    if(!this.vacio(this.email) && !this.vacio(this.password) && !this.vacio(this.confirmPassword) && !this.vacio(this.name)
    && !this.vacio(this.apellido) && !this.vacio(this.carrera)
    ){
      alert("Completa todos los campos")
    } else if(!this.igual(this.password, this.confirmPassword)){
      alert("La contraseña no coincide")
    }else if(this.password.length <6){
      alert("La contraseña debe tener minimo 6 caracteres")

    }

    else{
     this.authService.registro(this.email,this.password,this.name,this.apellido, this.carrera)

    }


  }

  vacio(text: string) {
    return text != null && text.length > 0;
  }

  igual(text: string, text2: string) {
    return text == text2;

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