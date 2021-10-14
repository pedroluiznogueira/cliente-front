import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/models/servico.model';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  panelOpenState = false;
  servicos: Array<Servico> = new Array();
  
  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.listarServicos();
  }

  public listarServicos(): void {
    this.servicoService.listarServicos().subscribe(servicos => this.servicos = servicos);
  }

  public deletarServico(id: number | undefined): void {
    this.servicoService.deletarServico(id);
  }

  public enviarIdServico(id: number | undefined): void {
    this.servicoService.receberIdServico(id);
  }

}
