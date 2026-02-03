import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private url = 'http://localhost:8000/vehiculos';

  constructor(private http: HttpClient) {}

  crear(data:any){
    return this.http.post(this.url, data);
  }

  listar(){
    return this.http.get(this.url);
  }
}
