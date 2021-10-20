import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
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

  pesquisando: boolean = true;

  servicosFiltrados$!: Observable<Servico[]>
  private pesquisarTerms = new Subject<string>();
  
  constructor(private servicoService: ServicoService) { }

  public pesquisar(term: string): void {
    this.pesquisando = false;
    this.pesquisarTerms.next(term);
  }

  ngOnInit(): void {
    this.listarServicos();
    
    this.servicosFiltrados$ = this.pesquisarTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.servicoService.pesquisarServicos(term)),
    );
  }

  public listarServicos(): void {
    this.servicoService.listarServicos().subscribe(servicos => this.servicos = servicos);
  }

  public deletarServico(id: number | undefined): void {
    this.servicoService.deletarServico(id);
    this.ngOnInit();
  }

  public enviarIdServico(id: number | undefined): void {
    this.servicoService.receberIdServico(id);
  }

}
