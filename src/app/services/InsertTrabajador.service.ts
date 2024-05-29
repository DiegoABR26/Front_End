import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InsertTrabajador {
  dni:string;
  nombre: string;
  sede: number; // revisar el  tipo de dato de este
  tipo_Horario: number; // revisar el dato de este
  tipo_Contrato: number;
  fecha_Ingreso: string;
  fecha_Cese: string;
  email: string;
  numero_Contact: string;
}

@Injectable({
  providedIn: 'root'
})
export class InsertTrabajadorService {

  private apiUrl = 'https://localhost:5001/api/BusinessIntelligenceController/InsertTrabajador';

  constructor(private http: HttpClient) { }

  insertTrabajador(trabajador: InsertTrabajador): Observable<any> {
    return this.http.post<any>(this.apiUrl, trabajador);
  }
}
