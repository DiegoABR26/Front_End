import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Trabajador {
  nombre1: string;
  apellido1: string;
  sede1: number; // revisar el  tipo de dato de este
  THorario: string; // revisar el dato de este
  email: string;
  numberContact: string;
}

@Injectable({
  providedIn: 'root'
})
export class InsertTrabajadorService {

  private apiUrl = 'https://localhost:5001/api/BusinessIntelligenceController/GetTipoHorarios';

  constructor(private http: HttpClient) { }

  insertTrabajador(trabajador: Trabajador): Observable<any> {
    return this.http.post<any>(this.apiUrl, trabajador);
  }
}
