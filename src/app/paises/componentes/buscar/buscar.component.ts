import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(500)
    ).subscribe(term => {
     this.onDebounce.emit(term);
    })
   }


 @Output() onEnter : EventEmitter<string> = new EventEmitter();
 @Output() onDebounce : EventEmitter<string> = new EventEmitter();

 @Input() placeholder : string="";

 debounce: Subject<string> = new Subject();
 termino : string =""; 
 constructor(){}

 buscar(){
  this.onEnter.emit(this.termino);
  }  

  teclaPresionada(){
    this.debounce.next(this.termino)
  }

}
