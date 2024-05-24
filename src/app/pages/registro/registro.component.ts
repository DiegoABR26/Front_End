import { Component, OnInit} from "@angular/core";
import { GetTipoHorario,ResultHorario,Resultado, RequestTipoHorario } from "src/app/services/GetTipoHorario.service";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InsertTrabajadorService, Trabajador } from "src/app/services/InsertTrabajador.service";

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  message: string = '';

  results: Resultado[] = [];

  constructor(private router: Router, private apiService: GetTipoHorario, private insertTrabajadorService: InsertTrabajadorService) {}

  onInsertTrabajador(form: NgForm): void {
    if (form.valid) {
      const trabajador: Trabajador = form.value;
      this.insertTrabajadorService.insertTrabajador(trabajador).subscribe(
        response => {
          this.message = 'La inserción se realizó con éxito.';
          form.resetForm();
        },
        error => {
          this.message = 'Hubo un error en la inserción. Por favor, intente de nuevo.';
          console.error(error);
        }
      );
    } else {
      this.message = 'Por favor, complete todos los campos correctamente.';
    }
  }


  navigate(url: string): void {
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
    const request:RequestTipoHorario={
      Id_Horario : 2
    }

    this.apiService.getResults(request).subscribe(response => {
      this.results = response.result;
      console.log(this.results);
    },
    error => {
      console.log('Error:', error);
    });
  }
}
