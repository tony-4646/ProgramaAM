import { Component, OnInit } from '@angular/core';
import { Inoticia } from '../interface/inoticia';
import { NoticiasServices } from '../Services/noticias';

@Component({
  selector: 'app-noticias',
  imports: [],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias implements OnInit{
  lista_noticias:Inoticia[];
  constructor (private noticiaService: NoticiasServices) {
    this.lista_noticias = []
  }

  ngOnInit(): void {
    this.noticiaService.todasnoticias().subscribe(
      (noticias)=>{
        const {articles} = noticias;
        this.lista_noticias = articles;
      }
    );
    
  }
}
