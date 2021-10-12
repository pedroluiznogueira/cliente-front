import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  
  private clientes: Array<Cliente> = new Array();

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  public listarClientes(): void {
    this.cadastroService.listarClientes().subscribe(clientes => this.clientes = clientes);
  }
  
  public get getClientes(): Array<Cliente> {
    return this.clientes;
  }

}
