import { Component, OnInit} from "@angular/core";
import { GetTipoHorario,ResultHorario } from "src/app/services/GetTipoHorario.service";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InsertTrabajadorService, InsertTrabajador } from "src/app/services/InsertTrabajador.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  message: string = '';

  results: ResultHorario[] = [];

  constructor(private router: Router, private apiService: GetTipoHorario, private insertTrabajadorService: InsertTrabajadorService, private snackBar: MatSnackBar) {}

  onInsertTrabajador(form: NgForm): void {
    console.log(form.value);
    let errores = [];

    if (isNaN(form.value.dni)){
      errores.push("DNI invalido")
    }

    if (errores.length > 0) {
      this.snackBar.open(errores.join(', '), 'Cerrar', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
      return;
    }

    if (form.valid) {
      const trabajador: InsertTrabajador = {
        dni:form.value.dni,
        nombre: form.value.nombre+" "+form.value.apellido,
        sede: form.value.sede, // revisar el  tipo de dato de este
        tipo_Horario: Number(form.value.tHorario), // revisar el dato de este
        tipo_Contrato: Number(form.value.tContrato),
        fecha_Ingreso: form.value.fecha_Ingreso.replaceAll("-",""),
        fecha_Cese: form.value.fecha_Cese.replaceAll("-",""),
        email: form.value.email,
        numero_Contact: form.value.numero_Contact,
      };
      this.insertTrabajadorService.insertTrabajador(trabajador).subscribe(
        response => {
          this.message = 'La inserción se realizó con éxito.';
          this.snackBar.open(this.message, 'Cerrar', { duration: 2000, horizontalPosition: 'right', verticalPosition: 'bottom' });
          form.resetForm();
          console.log(form.value);
          console.log(trabajador);
        },
        error => {
          this.message = 'Hubo un error en la inserción. Por favor, intente de nuevo.';
          this.snackBar.open(this.message, 'Cerrar', { duration: 2000, horizontalPosition: 'right', verticalPosition: 'bottom' });
          console.error(error);
        }
      );
    } else {
      console.log(form.value);
      this.message = 'Por favor, complete todos los campos correctamente.';
      this.snackBar.open(this.message, 'Cerrar', { duration: 2000, horizontalPosition: 'right', verticalPosition: 'bottom' });
    }
  }



  navigate(url: string): void {
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {

    this.apiService.getResults().subscribe(response => {
      this.results = response.result;
    },
    error => {
      console.log('Error:', error);
    });
  }
}
