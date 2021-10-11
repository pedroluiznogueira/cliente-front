import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  private clientes: Array<Cliente> = new Array();

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  public listarClientes(): void {
    this.cadastroService.listarClientes().subscribe(clientes => this.clientes = clientes);
  }

}
