import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  listar(): Cliente[] {

  return [{
      id: 1,
      nome: "Fulano",
      sobrenome: "de Tal",
      dataNascimento: "2001-09-11",
      email: "dale@gmail.com",
      cpf: "12345678910"
    }, 

    { id: 2,
      nome: "Jorge",
      sobrenome: "Ben Jor",
      dataNascimento: "1939-03-22",
      email: "jorgebenjor@gmail.com",
      cpf: "77799911101"
    },

    { id: 3,
      nome: "Pedro",
      sobrenome: "Rodrigues Filho",
      dataNascimento: "1954-10-29",
      email: "pedrinhobondadepura@gmail.com",
      cpf: "12112112111"
    },


  
  ];

  }
}