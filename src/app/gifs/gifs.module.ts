import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar/buscar.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { PrincipalComponent } from './principal/principal.component';



@NgModule({
  declarations: [
    BuscarComponent,
    ImagenesComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule
  ], exports:[
    BuscarComponent,
    ImagenesComponent,
    PrincipalComponent
  ]
})
export class GifsModule { }
