import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/models/servico.model';
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

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
  }

  public envioFormulario(): void {
    this.servico = new Servico();

    this.servico.titulo = this.titulo;
    this.servico.descricao = this.descricao;
    this.servico.valor = this.valor;

    this.servicoService.criarServico(this.servico);

    this.titulo = "";
    this.descricao = "";
    this.valor = 0;
  }

}
