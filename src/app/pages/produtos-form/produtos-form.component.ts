import { Component, OnInit, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Produtos } from "../../model/produtos";
import { ProdutosService } from "../../services/produtos.service";

@Component({
  selector: 'app-produtos-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produtos-form.component.html',
  styleUrl: './produtos-form.component.css'
})

export class ProdutosFormComponent implements OnInit {
 produtos: Produtos = {} as Produtos;
  private service = inject(ProdutosService);
  private router = inject(Router);

  private route = inject(ActivatedRoute);
  produtosId: string | null = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    if (this.produtosId) {
      this.service.buscarPorId(this.produtosId).subscribe({
        next: (produtos) => this.produtos = produtos,
        error: () => alert('Produto não encontrado.')
      });
    }
  }

  salvar() {

    if (this.produtosId) {
      //modo alteracao
      this.service.editar(this.produtos).subscribe({
        next: (produtos) => {
          this.produtos = produtos;
          this.router.navigate(['/produtos']);
        }
      });

    } else {
      //modo inclusao
      this.service.incluir(this.produtos).subscribe({
        next: (produtos) => {
          this.produtos = produtos;
          alert(`Produto ${this.produtos.nome} cadastrado com sucesso!`);
          this.router.navigate(['/produtos']);
        }
      });
    }
  }

}