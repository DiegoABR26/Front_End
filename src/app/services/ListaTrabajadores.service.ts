import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NumberInput } from '@angular/cdk/coercion';

export interface TrabajadorRequest{
  dni : string;
  nombre : string;
  tipo_Horario : number;
  tipo_Contrato : number;
  sede : number;
}

export interface TrabajadorResult{
  lista: Trabajador[];
  errorIndicator : number;
  message_error : string;
}


export interface Trabajador{
  id : number;
  dni : string;
  nombre : string;
  horario : string;
  tipo_Contrato : number;
  fecha_Ingreso : string;
  actividad : string;
  fecha_Cese : string;
  nombre_Sede : string;
  email : string;
  numero_Contact : string;
}

@Injectable({
  providedIn: 'root'
})

export class ListTrabajadoresService {
  private apiUrl = 'http://localhost:9095/api/BusinessIntelligenceController/ListaTrabajadores';

  constructor(private http:HttpClient ){ }

  ListTrabajadores(request : TrabajadorRequest ): Observable<TrabajadorResult>{
    return this.http.post<TrabajadorResult>(this.apiUrl,request)
  }
}
