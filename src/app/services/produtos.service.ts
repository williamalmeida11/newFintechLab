import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produtos } from "../model/produtos";


@Injectable({
  providedIn: 'root'
})


export class ProdutosService {
  private readonly API = 'http://localhost:3000/produtos';
  constructor(private http: HttpClient) { }

  listar(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.API);
  }

  incluir(produtos: Produtos): Observable<Produtos> {
    console.log('Enviando produto para inclusão:', produtos);
    return this.http.post<Produtos>(this.API, produtos);
  }

  excluir(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }

  buscarPorId(id: string): Observable<Produtos> {
    return this.http.get<Produtos>(`${this.API}/${id}`);
  }

  editar(produtos: Produtos): Observable<Produtos> {
    return this.http.put<Produtos>(`${this.API}/${produtos.id}`, produtos);
  }
}