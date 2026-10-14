import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  itensMenu = [
    {label:'Início', link:''},
    {label:'Contas', link:'contas'},
    {label:'Sobre', link:'sobre'},
    {label: 'Clientes', link:'clientes'}
  ];
}
