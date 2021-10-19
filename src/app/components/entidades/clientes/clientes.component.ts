import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  pesquisando: boolean = true;

  // vou querer iterar no html no observable e não no array
  clientesFiltrados$!: Observable<Cliente[]>
  // subject funciona tanto como um observable quanto como um tipo
  private pesquisarTerms = new Subject<string>();

  private clientes: Array<Cliente> = new Array();

  constructor(private clienteService: ClienteService) { }

  // pesquisar assincronamente os clientes filtrados
  public pesquisar(term: string): void {
    // dando push do valor do input no array pesquisarTerms
    this.pesquisando = false;
    this.pesquisarTerms.next(term);
  }

  ngOnInit(): void {
    this.listarClientes();

    this.clientesFiltrados$ = this.pesquisarTerms.pipe(
      // espera 300ms antes de pensar na proxima tecla que foi digitada
      debounceTime(300),

      // ignora o conteúdo do input se for igual ao anterior
      distinctUntilChanged(),

      // troca para um novo observable de pesquisa toda vez que o term muda, ou seja, conforme digitamos
      switchMap((term: string) => this.clienteService.pesquisarClientes(term)),
    );
  }

  public listarClientes(): void {
    this.clienteService.listarClientes().subscribe(clientes => this.clientes = clientes)}
  
  public get getClientes(): Array<Cliente> {
    return this.clientes;
  }

  public enviarIdCliente(id: number | undefined) {
    this.clienteService.receberIdCliente(id);
  }

  public deletarCliente(id: number | undefined): void {
    this.clienteService.deletarCliente(id);
    this.ngOnInit();
  }
}
