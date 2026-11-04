import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../../services/produtos.service';
import { Produtos } from '../../model/produtos';

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
        error: () => alert('Produtos não encontrado.')
      });
    }
  }
if (this.produtosId){
      //modo alteracao
      this.service.editar(this.produtos).subscribe({
      next: (produtos) => {
        this.produtos = produtos;
        this.router.navigate(['produtos-cadastro-listar']);
      }

      })

       }else {
       //modo onclusao

        this.service.incluir(this.produtos).subscribe({
        next: (produtos) => {
          this.produtos = produtos;
          alert(`Cliente ${this.produtos.nome} cadastrado com sucesso!`);
          this.router.navigate(['/produtos-cadastro-listar']);
         }
      });
    }
}





