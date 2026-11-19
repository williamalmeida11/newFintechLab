import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ItemCarrinho, Venda } from '../../model/carrinho';
import { CarrinhoService } from '../../services/carrinho.service';
import { VendaService } from '../../services/venda.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {

  private carrinhoService = inject(CarrinhoService);
  private vendaService = inject(VendaService);
  private router = inject(Router);

  itens: ItemCarrinho[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.atualizarCarrinho();
  }

  atualizarCarrinho() {
    this.itens = this.carrinhoService.listar();
    this.total = this.carrinhoService.calcularTotal();
  }

  aumentar(produtoId: string) {
    this.carrinhoService.aumentar(produtoId);
    this.atualizarCarrinho();
  }

  diminuir(produtoId: string) {
    this.carrinhoService.diminuir(produtoId);
    this.atualizarCarrinho();
  }

  remover(produtoId: string) {
    this.carrinhoService.remover(produtoId);
    this.atualizarCarrinho();
  }

  finalizarCompra() {

    if (this.itens.length === 0) {
      alert('O carrinho está vazio.');
      return;
    }

    const venda: Venda = {
      itens: this.itens,
      total: this.total,
    };

    this.vendaService.incluir(venda).subscribe({
      next: () => {
        alert('Compra finalizada com sucesso!');
        this.carrinhoService.limpar();
        this.atualizarCarrinho();
        this.router.navigate(['/produtos']);
      },
      error: () => alert('Não foi possível finalizar a compra. Tente novamente.')
    });
  }
}
