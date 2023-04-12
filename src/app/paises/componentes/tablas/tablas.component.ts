import { Component, Input } from '@angular/core';
import { Paises } from '../../interfazPaise/paies.interfaces';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent {
  @Input() paises : Paises[] = [];

  constructor(){}
}
