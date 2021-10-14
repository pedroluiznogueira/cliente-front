import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { CadastroService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public nome?: string;
  public sobrenome?: string;
  public email?: string;
  public cliente?: Cliente;

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
    console.log("Formulario enviado")
  }

}
