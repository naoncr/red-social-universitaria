import { inject, Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';

export interface user {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private _auth = inject(Auth)

  login(user: user) {
    return createUserWithEmailAndPassword(
      this._auth, 
      user.email, 
      user.password
    );
  }

  constructor() { }

}