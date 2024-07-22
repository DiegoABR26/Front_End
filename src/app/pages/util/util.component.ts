import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { InsertSedesService, SedesRequest } from "src/app/services/InsertSede.service";
import { ListSedesService, SedesResult, Sedes } from "src/app/services/ListaSedes.service";
import { InsertMontosPagosService, MontosPagosRequest } from "src/app/services/InsertMontosPagos.services";

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls:['./util.component.css']
})


export class UtilComponent implements OnInit {
  nombre_sede: string = '';
  message: string = '';
  results: Sedes[] = [];

  constructor(private router: Router, private InsertSedesService:InsertSedesService, private snackBar: MatSnackBar, private sedesApiService: ListSedesService, private insertMontosPagosService: InsertMontosPagosService) {}

  onInsertSede(form: NgForm): void {

    if (form.valid) {
      const sede : SedesRequest = {
        nombre_Sede:form.value.sede
      };
      this.InsertSedesService.InsertSedes(sede).subscribe(
        response => {
          this.message = 'La inserción se realizó con éxito.';
          this.snackBar.open(this.message, 'Cerrar', { duration: 2000, horizontalPosition: 'right', verticalPosition: 'bottom' });
          form.resetForm();
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

  onInsertMontosPagos(form:NgForm):void{
    if (form.valid) {
      const montosPagos : MontosPagosRequest = {
        pago_dia:form.value.pago_dia,
        pago_hora:form.value.pago_hora,
        pago_hora_nocturna:form.value.pago_hora_nocturna,
        dscto_total:form.value.dscto_total
      };
      this.insertMontosPagosService.InsertMontosPagos(montosPagos).subscribe(
        response => {
          this.message = 'La inserción se realizó con éxito.';
          this.snackBar.open(this.message, 'Cerrar', { duration: 2000, horizontalPosition: 'right', verticalPosition: 'bottom' });
          form.resetForm();
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

  onMostrarSede():void{
    this.sedesApiService.ListSedes().subscribe(response => {
      this.results = response.List
    console.log(this.results)},
      error => {
        console.log('Error:', error);
      });
    }
  navigate(url: string): void {
    this.router.navigateByUrl(url);
  }


  ngOnInit(): void {

  }
}

