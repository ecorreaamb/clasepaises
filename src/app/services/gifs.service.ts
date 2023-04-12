import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataGifs, Gif } from '../gifs/interfazGIFS/Gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  
  private apiKey : string = 'wjQOFEYSZSWmjBR8pErIOhDxqU2vMQBn';
  private url : string = 'http://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient) {
    this.resultados = JSON.parse(localStorage.getItem('resultado')!) || [];
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')! || '');
    }
   }

  async buscarGifs(query: string) {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
      
    }
    
    const params = new HttpParams()
                    .set('api_key', this.apiKey)
                    .set('q', query)
                    .set('limit','10');
    this.http.get<DataGifs>(`${this.url}/search`,{params}).subscribe( (resp) => {
       console.log(resp.data);
       this.resultados = resp.data;
       localStorage.setItem('resultado', JSON.stringify(this.resultados));
    })
  }
}
