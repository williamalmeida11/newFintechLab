import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  private readonly API = 'http://localhost:3000/clientes';
  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API);
  }

  incluir(cliente: Cliente): Observable<Cliente> {
    console.log('Enviando cliente para inclusão:', cliente);
    return this.http.post<Cliente>(this.API, cliente);
  }

  excluir(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }

  buscarPorId(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API}/${id}`);
  }

  editar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.API}/${cliente.id}`, cliente);
  }
}