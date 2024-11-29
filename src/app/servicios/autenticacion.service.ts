import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  constructor(private auth: Auth) {}

  iniciarSesion(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  registrarUsuario(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
}
