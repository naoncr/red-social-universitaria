import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { environment } from './app/environment/environment';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()), // Configuración correcta de Auth
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"red-social-56a66","appId":"1:990540737115:web:8f89d3b1e815086fd92d7e","storageBucket":"red-social-56a66.firebasestorage.app","apiKey":"AIzaSyB7z0PZ6zcevqLfzQY_F2WzvaFiY_frVzU","authDomain":"red-social-56a66.firebaseapp.com","messagingSenderId":"990540737115"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
});
