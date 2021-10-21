import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-formulario-cliente-update',
  templateUrl: './formulario-cliente-update.component.html',
  styleUrls: ['./formulario-cliente-update.component.css']
})
export class FormularioClienteUpdateComponent implements OnInit {

  nome?: string;
  sobrenome?: string;
  email?: string;
  cliente?: Cliente;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  public envioFormulario(){
    this.novoCliente();

    this.nome = "";
    this.sobrenome = "";
    this.email = "";
  }

  public novoCliente(): void {
    this.cliente = new Cliente();

    this.cliente.nome = this.nome;
    this.cliente.sobrenome = this.sobrenome;
    this.cliente.email = this.email;

    this.clienteService.novoCliente(this.cliente);
  }

}
