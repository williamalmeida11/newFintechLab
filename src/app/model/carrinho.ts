import { Produtos } from './produtos';

export interface ItemCarrinho {
  produto: Produtos;
  quantidade: number;
}

export interface Venda {
  id?: string;
  clienteId?: string;
  itens: ItemCarrinho[];
  total: number;
}
