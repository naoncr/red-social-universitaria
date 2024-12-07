import { Injectable } from '@angular/core';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp'
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { FirebaseTSFirestore } from "firebasets/firebasetsFirestore/firebaseTSFirestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth : FirebaseTSAuth;
  firestore : FirebaseTSFirestore;

  constructor() { 
this.auth = new FirebaseTSAuth();
this.firestore = new FirebaseTSFirestore();

  }


  registro(email:string, pass :string, nombre:string, apellido:string){
  
    this.auth.createAccountWith({
      email: email,
      password: pass,

      onComplete: (uc) => {
        alert("Registro completo")
        
      },
      onFail: (err) => {
        
        console.log(err.message)
        
        
      },
    });


  }





}
