import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './gifs/principal/principal.component';
import { PaisComponent } from './paises/pais/pais.component';
import { RegionComponent } from './paises/region/region.component';
import { CapitalComponent } from './paises/capital/capital.component';

const routes: Routes = [
  {path:'',component:PrincipalComponent,pathMatch:'full'},
  {path:'gifs',component:PrincipalComponent},
  {path:'paises',component:PaisComponent},
  {path:'region',component:RegionComponent},
  {path:'capital',component:CapitalComponent},
  {path:'**',redirectTo:'paises'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
