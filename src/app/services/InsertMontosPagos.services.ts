import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MontosPagosRequest{
  pago_dia:	number,
	pago_hora:number,
	pago_hora_nocturna:number,
	dscto_total:number
}


@Injectable({
  providedIn: 'root'
})

export class InsertMontosPagosService {
  private apiUrl = 'http://localhost:9095/api/BusinessIntelligenceController/InsertMontosPagos';

  constructor(private http:HttpClient ){ }

  InsertMontosPagos(montosPagosRequest : MontosPagosRequest ): Observable<any>{
    return this.http.post<any>(this.apiUrl, montosPagosRequest)
  }
}
