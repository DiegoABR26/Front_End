import { Component, OnInit, ViewChild } from "@angular/core";
import { GetTipoHorario,ResultHorario } from "src/app/services/GetTipoHorario.service";
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListTrabajadoresService,TrabajadorRequest } from "src/app/services/ListaTrabajadores.service";
import { Trabajador } from "src/app/services/ListaTrabajadores.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls:['./consulta.component.css']
})


export class ConsultaComponent implements OnInit {

  navigate(url: string): void {
    this.router.navigateByUrl(url);
  }
  searchCriteria: TrabajadorRequest= {
      dni: '',
      nombre: '',
      tipo_Horario: 0,
      tipo_Contrato: 0,
      sede: 0,
    }
    results : Trabajador[]=[]
    displayedColumns: string[] = [
      'id',
       'dni',
       'nombre',
       'horario',
       'tipo_Contrato',
       'fecha_Ingreso',
       'actividad',
       'fecha_Cese',
       'nombre_Sede',
       'email',
       'numero_Contact'
      ];
    dataSource = new MatTableDataSource<Trabajador>([]);

    constructor(private apiService: GetTipoHorario,private router: Router, private ListTrabajadoresService: ListTrabajadoresService, private snackBar: MatSnackBar ) { }

    @ViewChild(MatPaginator)
    paginator!: MatPaginator;

    ngOnInit() {
      this.dataSource.paginator = this.paginator;
      this.fetchTrabajadores(this.searchCriteria);
    }

    fetchTrabajadores(request: TrabajadorRequest) {
      // Validaciones
      let errores = [];

    if (isNaN(request.tipo_Horario)) {
      errores.push('Tipo de horario inválido');
    }

    if (isNaN(request.tipo_Contrato)) {
      errores.push('Tipo de contrato inválido');
    }

    if (isNaN(request.sede)) {
      errores.push('Sede inválida');
    }

    if (errores.length > 0) {
      this.snackBar.open(errores.join(', '), 'Cerrar', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
      return;
    }

      // Si no hay errores, proceder con la llamada al servicio
      this.ListTrabajadoresService.ListTrabajadores(request).subscribe(
        response => {
          if (response.errorIndicator === 0) {
            this.dataSource.data = response.lista;
            this.dataSource.paginator = this.paginator;
          } else {
            console.error(response.message_error);
          }
        },
        error => {
          console.log('Error:', error);
        }
      );
    }


    onSearch() {
      this.fetchTrabajadores(this.searchCriteria);
    }

}

