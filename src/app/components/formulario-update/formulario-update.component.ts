import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { CadastroService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-formulario-update',
  templateUrl: './formulario-update.component.html',
  styleUrls: ['./formulario-update.component.css']
})
export class FormularioUpdateComponent implements OnInit {
  nome?: string;
  sobrenome?: string;
  email?: string;
  cliente?: Cliente;

  constructor(private cadastroService: CadastroService) { }

  ngOnInit() {
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

    this.cadastroService.novoCliente(this.cliente);
  }

  
}
