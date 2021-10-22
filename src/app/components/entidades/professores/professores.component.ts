import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  pesquisando: boolean = true;

  // vou querer iterar no html no observable e não no array
  professoresFiltrados$!: Observable<Cliente[]>

  private pesquisarTerms = new Subject<string>();

  private professores: Array<Cliente> = new Array();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listarProfessores();

    this.professoresFiltrados$ = this.pesquisarTerms.pipe(
      // espera 300ms antes de pensar na proxima tecla que foi digitada
      debounceTime(300),

      // ignora o conteúdo do input se for igual ao anterior
      distinctUntilChanged(),

      // troca para um novo observable de pesquisa toda vez que o term muda, ou seja, conforme digitamos
      switchMap((term: string) => this.clienteService.pesquisarClientes(term)),
    );
  }

  public pesquisar(term: string): void {
    // dando push do valor do input no array pesquisarTerms
    this.pesquisando = false;
    this.pesquisarTerms.next(term);
  }

  public listarProfessores(): void {
    this.clienteService.listarClientes().subscribe(professores => this.professores = professores)}
  
  public get getProfessores(): Array<Cliente> {
    return this.professores;
  }

  public getProfessorById(id:number | undefined): void {
    this.clienteService.getClienteById(id);
  } 

  public enviarIdProfessor(id: number | undefined) {
    this.clienteService.receberIdCliente(id);
  }

  public deletarProfessor(id: number | undefined): void {
    this.clienteService.deletarCliente(id);
    this.ngOnInit();
  }

}
