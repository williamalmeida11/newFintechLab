import { Injectable } from '@angular/core';
import { Cliente } from '../../model/cliente';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor() { }

  listar():Cliente[]{
    return [{ id: 1, 
              nome: "Enzo",
              sobrenome: "Silva",
              dataNascimento: "2005-01-10",
              email: "enzo@email.com",
              cpf: "12345678910"
            },
            { id: 2, 
              nome: "Valentina",
              sobrenome: "Soares",
              dataNascimento: "2007-03-05",
              email: "valentina@email.com",
              cpf: "10987654321"
            }
          
          ]
  }
}


