import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-post',
  standalone: true,
  imports: [],
  templateUrl: './crear-post.component.html',
  styleUrl: './crear-post.component.css'
})
export class CrearPostComponent {
  selectedImageFile: File | null = null;
  constructor(private dialog: MatDialogRef<CrearPostComponent>, private authService: AuthService) {

  }

 async PostClick(commentInput: HTMLTextAreaElement) {
    let text = commentInput.value;

    if (text.length <= 0) return;
    if (this.selectedImageFile) {
     // this.uploadImagePost(comment);

     const url =await this.uploadToDevmias(this.selectedImageFile) +"";
     this.dialog.close();
       this.authService.crearPostImagen(text,url)
     
     
     
    } else {
      this.dialog.close();
       this.authService.crearPostText(text)
      
    }

  }


  async uploadToDevmias(selectedImageFile: File): Promise<string | undefined> {
    let url: string | undefined;

    try {
      // Crear un FormData para enviar el archivo
      const formData = new FormData();
      formData.append('file', selectedImageFile);

      // URL del archivo PHP
      const serverUrl = 'https://devmiasx.com/upload.php'; // Cambia esto por la URL donde está tu archivo PHP

      // Realizar la solicitud POST
      const response = await fetch(serverUrl, {
        method: 'POST',
        body: formData,
      });

      // Verificar si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      // Parsear la respuesta
      const responseData = await response.json();

      if (responseData.success) {
        url = "https://devmiasx.com/" + responseData.url;
      } else {
        throw new Error(responseData.message || 'Error desconocido al subir la imagen.');
      }
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }

    return url;
  }


  onPhotoSelected(photoSelector: HTMLInputElement) {

    // Verificar si hay un archivo seleccionado
    if (photoSelector.files?.length) {
      this.selectedImageFile = photoSelector.files[0];


      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.selectedImageFile);
      fileReader.onload = () => {
        const postPreviewImage = document.getElementById("post-preview-image") as HTMLImageElement;
        

        if (postPreviewImage && fileReader.result) {

          postPreviewImage.src = fileReader.result.toString();

        }
      };
    } else {
      this.selectedImageFile = null; // O undefined, según tu preferencia
    }
  }
}
