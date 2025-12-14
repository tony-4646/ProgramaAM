import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inoticia } from '../interface/inoticia';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoticiasServices {
  constructor(private http: HttpClient){

  }
  todasnoticias():Observable<any[]>{
    return this.http.get<any[]>("");
  }
}
