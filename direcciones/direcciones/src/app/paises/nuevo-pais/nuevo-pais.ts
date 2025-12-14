import { Component, OnInit } from '@angular/core';
import { Pais } from '../../Services/pais';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-pais',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './nuevo-pais.html',
  styleUrl: './nuevo-pais.css',
})
export class NuevoPais implements OnInit {
  paisId: number;
  frmPais = new FormGroup({
    nombre: new FormControl("", Validators.required),
  });
  constructor(private paisesService: Pais,
    private navegacion: Router,
    private parametros: ActivatedRoute) {
    this.paisId = 0;
  }

  ngOnInit() {
    this.parametros.params.subscribe(
      (parametros) => {
        this.paisId = parametros["id"];
        if (this.paisId) {
          this.paisesService.uno(this.paisId).subscribe(
            (pais) => {
              this.frmPais.patchValue(
                {
                  nombre: pais.pais.nombre
                }
              );
            }
          );
        }
      }
    );
  }

  guardarNuevoPais() {

    if (this.paisId && this.paisId !== 0) {
            alert("Editando país: " + this.frmPais.value.nombre);
      const nombre = this.frmPais.value.nombre;
      this.paisesService.actualizar(this.paisId, nombre).subscribe(
        {
          next: (datos) => {
            alert("País actualizado con éxito");
            this.navegacion.navigate(['/paises']);
          },
          error: (error) => {
            alert("Error al actualizar el país: " + error.message);
          }
        }
      );
    }
    else {
      alert("Guardando nuevo país: " + this.frmPais.value.nombre);
      const nombre = this.frmPais.value.nombre;


      this.paisesService.insertar(this.frmPais.value.nombre).subscribe(
        {
          next: (datos) => {
            alert("País guardado con éxito");
            this.navegacion.navigate(['/paises']);
          },
          error: (error) => {
            alert("Error al guardar el país: " + error.message);
          }
        }
      );
    }
  }

  salir() {
    this.paisId = 0;
    this.navegacion.navigate(['/paises']);
  }
}
