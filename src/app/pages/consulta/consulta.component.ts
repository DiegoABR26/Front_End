import { Component, OnInit } from "@angular/core";
import { GetTipoHorario,ResultHorario, RequestTipoHorario } from "src/app/services/GetTipoHorario.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls:['./consulta.component.css']
})


export class ConsultaComponent implements OnInit {

  navigate(url: string): void {
    this.router.navigateByUrl(url);
  }
    results: any[] = [];


    constructor(private apiService: GetTipoHorario,private router: Router ) { }


    ngOnInit(): void {
      const request:RequestTipoHorario={
        Id_Horario : 2
      }

      this.apiService.getResults(request).subscribe(response => {
        this.results.push(response.result[0]);
        });
    }

}

