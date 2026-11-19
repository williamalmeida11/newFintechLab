import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProdutosService } from '../../../../services/produtos.service';
import { Produtos } from '../../../../model/produtos';
import { CarrinhoService } from '../../../../services/carrinho.service';

@Component({
  selector: 'app-produtos-clientes',
  imports: [RouterLink],
  templateUrl: './produtos-clientes.component.html',
  styleUrl: './produtos-clientes.component.css'
})
export class ProdutosClientesComponent implements OnInit{
  
  private service = inject(ProdutosService);
  private carrinhoService = inject(CarrinhoService);
  private router = inject(Router);

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

  adicionarAoCarrinho(produto: Produtos) {
    this.carrinhoService.adicionar(produto);
    alert(`${produto.nome} adicionado ao carrinho!`);
  }

  irParaCarrinho() {
    this.router.navigate(['/carrinho']);
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







