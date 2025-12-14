import { Component, OnInit } from '@angular/core';
import { Inoticia } from '../interface/inoticia';
import { NoticiasServices } from '../Services/noticia';

@Component({
  selector: 'app-noticias',
  imports: [], 
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias implements OnInit {
  lista_noticias: Inoticia[] = []; 

  constructor(private noticiaService: NoticiasServices) {}

  ngOnInit(): void {
    this.noticiaService.todasnoticias().subscribe({
      next: (respuesta) => {
        console.log(respuesta); 
        this.lista_noticias = respuesta.articles;
      },
      error: (error) => {
        console.error('Error al obtener noticias:', error);
      }
    });
  }
}