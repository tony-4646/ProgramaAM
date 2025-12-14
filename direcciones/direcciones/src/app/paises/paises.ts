import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Pais } from '../Services/pais';
import { Router, RouterLink } from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-paises',
  imports: [RouterLink],
  templateUrl: './paises.html',
  styleUrl: './paises.css',
})
export class Paises {
  listadoPaises: any[] = [];
  constructor(private paisesService: Pais, private navegacion: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.listadoPaises = [];
  }

  ngOnInit() {
    this.obtenerTodos();
  }

  obtenerTodos() {
    this.paisesService.todos().subscribe((lista) => {
      this.listadoPaises = lista.paises;
      this.cdr.detectChanges();
      console.log(this.listadoPaises);
    })
  }

  nuevopais() {
    this.navegacion.navigate(["/nuevopais"]);
  }

  eliminar(id: number) {
    Swal.fire({
      title: "Gestión de paises",
      text: "Desea eliminar el país?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0000ff",
      cancelButtonColor: "rgba(24, 8, 255, 1)",
      confirmButtonText: "Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.paisesService.eliminar(id).subscribe({
          next: (datos) => {
            Swal.fire(
              "gestión de paises",
              "pais eliminado correctamente",
              "success"
            );
            this.obtenerTodos();
          },
          error: (error) => {
            Swal.fire(
              "gestión de paises",
              "error al guardar el pais: " + error.message,
              "success"
            );
          }
        });
      }
    });
  }
}

