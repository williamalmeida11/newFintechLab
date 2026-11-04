import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutosService } from '../../../../services/produtos.service';
import { Produtos } from '../../../../model/produtos';

@Component({
  selector: 'app-produtos-clientes',
  imports: [RouterLink],
  templateUrl: './produtos-clientes.component.html',
  styleUrl: './produtos-clientes.component.css'
})
export class ProdutosClientesComponent implements OnInit{
  
  private service = inject(ProdutosService);

  listaProdutos:Produtos[] = [];

  ngOnInit():void{
    this.service.listar().subscribe({
      next: (produtos) => {
        this.listaProdutos = produtos;
      }
    });
  }

  editar(id: string) {
    console.log('Editar produto:', id);
  }

  excluir(id: string) {

    if(id !== undefined && confirm('Deseja realmente excluir o produto?')) {
      this.service.excluir(id).subscribe({
        next: () => {
        this.listaProdutos = this.listaProdutos.filter(produtos => produtos.id !== id);
        }
      }); 
    }
  }

}







