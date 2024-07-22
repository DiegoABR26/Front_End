import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SedesRequest{
  nombre_Sede : String
}


@Injectable({
  providedIn: 'root'
})

export class InsertSedesService {
  private apiUrl = 'http://localhost:9095/api/BusinessIntelligenceController/InsertSedes';

  constructor(private http:HttpClient ){ }

  InsertSedes(sedesRequest : SedesRequest ): Observable<any>{
    return this.http.post<any>(this.apiUrl, sedesRequest)
  }
}
