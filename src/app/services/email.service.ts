import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'https://sua-api.com/enviar-email'; // URL da sua API

  constructor(private http: HttpClient) {}

  enviarEmail(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }
}
