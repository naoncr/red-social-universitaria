import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog"
import { CrearPostComponent } from '../crear-post/crear-post.component';



@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  constructor(private dialog : MatDialog){

  }
  crearPost(){
    this.dialog.open(CrearPostComponent);
    
  }
}
