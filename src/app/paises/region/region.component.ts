import { Component } from '@angular/core';
import { Paises } from '../interfazPaise/paies.interfaces';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  regiones: string [] = ['europe','asia','america','africa','oceania'];

  regionActiva : string = "";
  paises : Paises[] = [];
 
  constructor(private paisService : PaisesService){}
  
  getClaseCss(region : string){
   return(region === this.regionActiva) ? 'btn btn-primary':'btn btn-outline-primary';
  }
 
  actvarRegion(region : string){
   this.regionActiva = region;
   this.paisService.buscarRegion(region)
   .subscribe(data=>{
     this.paises = data;
   })
  }
}
