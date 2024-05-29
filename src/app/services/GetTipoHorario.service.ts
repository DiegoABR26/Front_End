import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface ResultHorario {
    id_Horario: number;
    hora_Inicio: string;
    hora_Final: string;
    canT_HORAS_TRABJ: string;
    actividad: number;
  }
  // Define otras propiedades según sea necesario

  export interface Resultado {
    result: ResultHorario[];
    errorIndicator: number;
    messageError: string;
  }


@Injectable({
  providedIn: 'root'
})


export class GetTipoHorario {
  private apiUrl = 'https://localhost:5001/api/BusinessIntelligenceController/GetTipoHorarios';

  constructor(private http: HttpClient) { }

  getResults(): Observable<Resultado> {
    return this.http.get<Resultado>(this.apiUrl);
  }

}
