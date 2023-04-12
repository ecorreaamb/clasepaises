import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from '../paises/interfazPaise/paies.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  //declarar las variables
private url : string = "https://restcountries.com/v3.1";

constructor( private http: HttpClient) { }
//en el obervable se captura todo del observable

get httpParams(){
return  new HttpParams()
.set('fields','name,capital,altSpellings,flags,population');
}

buscarPais(termino: string): Observable<Paises[]>{
const apiUrl = `${this.url}/name/${termino}`
return this.http.get<Paises[]>(apiUrl,{params:this.httpParams});
}


buscarCapital(termino: string): Observable<Paises[]>{
const apiUrl = `${this.url}/capital/${termino}`
return this.http.get<Paises[]>(apiUrl,{params:this.httpParams});
}

buscarPaisID(id: string): Observable<Paises[]>{
const apiUrl = `${this.url}/alpha/${id}`
return this.http.get<Paises[]>(apiUrl,{params:this.httpParams});
}

buscarRegion(region: string): Observable<Paises[]>{
const apiUrl = `${this.url}/region/${region}`
return this.http.get<Paises[]>(apiUrl,{params:this.httpParams});
}
}
