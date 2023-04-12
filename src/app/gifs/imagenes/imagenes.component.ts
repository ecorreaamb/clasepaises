import { Component } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent {
  
  constructor( private gifsService :GifsService){}

  get resultados() {
  return this.gifsService.resultados;
  }


}
