import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface Resultado {
  resultado:ResultHorario[];
  errorIndicator:number;
  messageError:string;
}

export interface ResultHorario {
    Id_Horario: number;
    Hora_Inicio: string;
    Hora_Final: string;
    Cant_Horas_Trabj: string;
  }
  // Define otras propiedades según sea necesario


export interface RequestTipoHorario {
  Id_Horario: number;
}

@Injectable({
  providedIn: 'root'
})


export class GetTipoHorario {
  private apiUrl = 'https://localhost:5001/api/BusinessIntelligenceController/GetTipoHorarios';

  constructor(private http: HttpClient) { }

  getResults(request: RequestTipoHorario): Observable<{ result: Resultado[] }> {
    return this.http.post<{ result: Resultado[] }>(this.apiUrl, request);
  }
}
