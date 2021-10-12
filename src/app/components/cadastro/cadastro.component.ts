import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { TabelaComponent } from '../tabela/tabela.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  listarClientes(): string {
    return "sdufjis";
  }
}
