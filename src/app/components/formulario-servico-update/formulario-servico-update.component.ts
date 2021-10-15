import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/models/servico.model';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-formulario-servico-update',
  templateUrl: './formulario-servico-update.component.html',
  styleUrls: ['./formulario-servico-update.component.css']
})
export class FormularioServicoUpdateComponent implements OnInit {

  novoTitulo?: string;
  novaDescricao?: string;
  novoValor?: number | undefined;

  servico?: Servico;

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
  }

  public envioFormulario(): void {

    this.novoServico();

    this.novoTitulo = "";
    this.novaDescricao = "";
    this.novoValor = 0;
  }

  public novoServico(): void {
    this.servico = new Servico();

    this.servico.titulo = this.novoTitulo;
    this.servico.descricao = this.novaDescricao;
    this.servico.valor = this.novoValor;

    console.log(this.servico.titulo);

    this.servicoService.novoServico(this.servico)
  }

}
