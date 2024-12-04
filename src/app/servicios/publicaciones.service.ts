import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PublicacionesService {
  private publicaciones: any[] = [];

  constructor() {}

  getPublicaciones() {
    return this.publicaciones;
  }

  agregarPublicacion(publicacion: any) {
    this.publicaciones.push(publicacion);
  }
}
