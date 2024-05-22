import { Component, OnInit } from "@angular/core";
import { listarTrabajadores, MyResultObject } from "src/app/services/listarTrabajadores.service";


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls:['./consulta.component.css']
})


export class ConsultaComponent implements OnInit {
    results: MyResultObject[] = [];

    constructor(private apiService: listarTrabajadores) { }

    ngOnInit(): void {
      this.apiService.getResults('someParam1', 123).subscribe(response => {
        this.results = response.data;
      });
    }

}

