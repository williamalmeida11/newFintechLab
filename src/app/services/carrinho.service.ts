import { Injectable } from '@angular/core';
import { Produtos } from '../model/produtos';
import { ItemCarrinho } from '../model/carrinho';

@Injectable({
  providedIn: 'root'
})

export class CarrinhoService {

  private itens: ItemCarrinho[] = [];

  listar(): ItemCarrinho[] {
    return this.itens;
  }

  adicionar(produto: Produtos) {
    const item = this.itens.find(i => i.produto.id === produto.id);

    if (item) {
      item.quantidade++;
    } else {
      this.itens.push({ produto: produto, quantidade: 1 });
    }
  }

  remover(produtoId: string) {
    this.itens = this.itens.filter(i => i.produto.id !== produtoId);
  }

  aumentar(produtoId: string) {
    const item = this.itens.find(i => i.produto.id === produtoId);

    if (item) {
      item.quantidade++;
    }
  }

  diminuir(produtoId: string) {
    const item = this.itens.find(i => i.produto.id === produtoId);

    if (item) {
      if (item.quantidade > 1) {
        item.quantidade--;
      } else {
        this.remover(produtoId);
      }
    }
  }

  calcularTotal(): number {
    let total = 0;

    for (const item of this.itens) {
      total += item.produto.valor * item.quantidade;
    }

    return total;
  }

  limpar() {
    this.itens = [];
  }
}
