import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venda } from '../model/carrinho';

@Injectable({
  providedIn: 'root'
})

export class VendaService {
  private readonly API = 'http://localhost:3000/vendas';
  constructor(private http: HttpClient) { }

  incluir(venda: Venda): Observable<Venda> {
    console.log('Enviando venda para inclusão:', venda);
    return this.http.post<Venda>(this.API, venda);
  }

  listar(): Observable<Venda[]> {
    return this.http.get<Venda[]>(this.API);
  }
}
