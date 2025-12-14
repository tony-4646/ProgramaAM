import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Pais {
  ruta = 'http://localhost:3000/api/paises';

  constructor(private readonly http: HttpClient) { }

  todos(): Observable<any> {
    return this.http.get<any>(this.ruta);
  }
  uno(id: number): Observable<any> {
    return this.http.get<any>(`${this.ruta}/${id}`);
  }

  insertar(nombre: any): Observable<any>{
    return this.http.post<any>(this.ruta,{nombre: nombre});
  }

  actualizar(id: number, nombre: any): Observable<any>{
    return this.http.put<any>(`${this.ruta}/${id}`, {nombre: nombre});
  }
   eliminar (id: number): Observable<any> {
    return this.http.delete<any>(`${this.ruta}/${id}`);
   }
}
