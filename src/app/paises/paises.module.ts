import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './capital/capital.component';
import { RegionComponent } from './region/region.component';
import { PaisComponent } from './pais/pais.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { TablasComponent } from './componentes/tablas/tablas.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CapitalComponent,
    RegionComponent,
    PaisComponent,
    ComponentesComponent,
    BuscarComponent,
    TablasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports:[
    CapitalComponent,
    RegionComponent,
    ComponentesComponent,
    BuscarComponent,
    TablasComponent
  ]
})
export class PaisesModule { }
