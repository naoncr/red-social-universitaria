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
  userDocument: userDocument | null = null;

  constructor() { 
this.auth = new FirebaseTSAuth();
this.firestore = new FirebaseTSFirestore();

  }


  registro(email:string, pass :string, nombre:string, apellido:string, carrera :string){
  
    this.auth.createAccountWith({
      email: email,
      password: pass,

      onComplete: (uc) => {
        

        //llenar datos de ususario
        let id = this.auth.getAuth().currentUser?.uid+"";
        this.firestore.create({
          path: ["usuarios",id],
          data: {
            userId: id,
            nombre:nombre ,
            apellido:  apellido,
            carrera: carrera ,
            fotoUrl: "https://devmiasx.com/uploads/67380645a9ac3_user.png",
            privacidad: "publico",
          

          },
          onComplete: (docId: string) => {

            alert("Registro completo")
          },
          onFail: (err: any) => {
            alert(err);
            ;
          }
        });
        
      },
      onFail: (err) => {
        
        console.log(err.message)
        
        
      },
    });


  }

  login(email:string, pass:string){
    this.auth.signInWith(
      {
        email: email,
        password: pass,
        onComplete: (uc) => {

         console.log("Iniciado correctamente")

        },
        onFail: (err) => {
          console.log("No se puede iniciar" + err);
          

        }
      }
    )
  }
  getInfoUser() {
    const user = this.auth.getAuth().currentUser

    if (user) {
      this.firestore.listenToDocument({
        name: "Getting Document",
        path: ["usuario", user.uid],
        onUpdate: (result) => {
          this.userDocument = <userDocument>result.data();
          console.log(this.userDocument)
        }
      });
    } else {
      console.warn("No hay un usuario autenticado.");
    }
  }
  

 




}

export interface userDocument {
  nombre: string;
  apellido: string;
carrera: string;
fotoUrl: string;
  privacidad: string;
  userId: string

}
