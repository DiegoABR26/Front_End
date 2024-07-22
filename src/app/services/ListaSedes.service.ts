import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Sedes{
  nombre_Sede:string
  id:number
  actividad: number
}

export interface SedesResult{
  List: Sedes[];
  errorIndicator : number;
  message_error : string;
}

export interface Sedes{

}

@Injectable({
  providedIn: 'root'
})


export class ListSedesService {
  private apiUrl = 'http://localhost:9095/api/BusinessIntelligenceController/GetSedes';

  constructor(private http:HttpClient){ }

  ListSedes(): Observable<SedesResult>{
    return this.http.get<SedesResult>(this.apiUrl)
  }
}
