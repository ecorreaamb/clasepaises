import { Component } from '@angular/core';
import { Paises } from '../interfazPaise/paies.interfaces';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent {
  error : boolean = false;
  public paises : Paises[] = [];

  constructor( private _servicePais : PaisesService){}

  buscar( termino : string){
    this.error = false;
    this._servicePais.buscarCapital(termino).subscribe(resp =>{
      console.log(resp);
      this.paises = resp;
    },(err)=>{
      this.error=true;
      this.paises=[];
    })
  }

  sugerencias(termino:string ){
    this.error = false;
  }
}
