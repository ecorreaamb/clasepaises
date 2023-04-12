import { Component } from '@angular/core';
import { Paises } from '../interfazPaise/paies.interfaces';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent {

  error : boolean = false;
  public paises : Paises[] = [];

  constructor( private servicePais : PaisesService){

  }

  buscar( termino : string){
    this.error = false;
    this.servicePais.buscarPais(termino).subscribe(resp =>{
      console.log(resp);
      this.paises = resp;
    },(err)=>{
      this.error=true;
    })
  }

  sugerencias(termino:string ){
    this.error = false;
  }



}
