import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nome?: string;
  sobrenome?: string;
  email?: string;
  cliente?: Cliente;

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  public envioFormulario(): void {
    this.cliente =  new Cliente();
    this.cliente.nome = this.nome;
    this.cliente.sobrenome = this.sobrenome;
    this.cliente.email = this.email;

    console.log(this.cliente)

    this.cadastroService.criarCliente(this.cliente);
    this.nome = "";
    this.sobrenome = "";
    this.email = "";
  }

}
