import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Servico } from 'src/app/models/servico.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-formulario-servico',
  templateUrl: './formulario-servico.component.html',
  styleUrls: ['./formulario-servico.component.css']
})
export class FormularioServicoComponent implements OnInit {

  public titulo?: string;
  public descricao?: string;
  public valor?: number | undefined;
  public servico?: Servico;
  public cliente?: Cliente = new Cliente();

  constructor(private servicoService: ServicoService, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.onClickAddServico.subscribe((cliente: Cliente) =>
    {
      this.cliente = cliente;
    })
  }

  public envioFormulario(): void {

    console.log(this.cliente)
    this.servico = new Servico();

    this.servico.titulo = this.titulo;
    this.servico.descricao = this.descricao;
    this.servico.valor = this.valor;

    console.log(this.servico.cliente)

    this.servicoService.criarServico(this.servico);

    this.titulo = "";
    this.descricao = "";
    this.valor = 0;
    
  }

}
