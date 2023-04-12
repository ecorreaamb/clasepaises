import { Component, Input } from '@angular/core';
import { Paises } from '../interfazPaise/paies.interfaces';


@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent {

  @Input() paises : Paises[] = [];

}
