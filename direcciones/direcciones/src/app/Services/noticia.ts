import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiasServices {
  constructor(private http: HttpClient) {}

  todasnoticias(): Observable<any> {
    return this.http.get<any>("https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=725d1d067847be7152cc2d6a29d57fab");
  }
}