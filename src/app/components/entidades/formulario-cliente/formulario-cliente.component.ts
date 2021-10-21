import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent implements OnInit {

  public nome?: string;
  public sobrenome?: string;
  public email?: string;
  public cliente?: Cliente;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  public envioFormulario(): void {
    this.cliente =  new Cliente();
    this.cliente.nome = this.nome;
    this.cliente.sobrenome = this.sobrenome;
    this.cliente.email = this.email;

    this.clienteService.criarCliente(this.cliente);
    this.nome = "";
    this.sobrenome = "";
    this.email = "";
  }

}
