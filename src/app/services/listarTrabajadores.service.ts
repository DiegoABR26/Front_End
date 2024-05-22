import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface MyResultObject {
  property1: string;
  property2: number;
  // Define otras propiedades según sea necesario
}

@Injectable({
  providedIn: 'root'
})

export class listarTrabajadores {
  private apiUrl = 'http://localhost:9095/api/BusinessIntelligenceController/GetTipoHorarios';

  constructor(private http: HttpClient) { }

  getResults(param1: string, param2: number): Observable<{ data: MyResultObject[] }> {
    return this.http.get<{ data: MyResultObject[] }>(`${this.apiUrl}?param1=${param1}&param2=${param2}`);
  }
}
