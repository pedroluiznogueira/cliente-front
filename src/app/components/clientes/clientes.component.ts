import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { CadastroService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  private clientes: Array<Cliente> = new Array();

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  public listarClientes(): void {
    this.cadastroService.listarClientes().subscribe(clientes => this.clientes = clientes);
  }
  
  public get getClientes(): Array<Cliente> {
    return this.clientes;
  }

  public enviarIdCliente(id: number | undefined) {
    this.cadastroService.receberIdCliente(id);
  }

  public deletarCliente(id: number | undefined): void {
    this.cadastroService.deletarCliente(id);
    this.ngOnInit();
  }

}
