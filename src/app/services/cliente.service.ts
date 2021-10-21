import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cliente } from '../models/cliente';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url: string = "http://localhost:8080/";

  cliente: Cliente = new Cliente();
  c: Cliente = new Cliente();

  @Output() onClickDetails: EventEmitter<Cliente> = new EventEmitter<Cliente>();
  @Output() onClickAddServico: EventEmitter<Cliente> = new EventEmitter<Cliente>();

  constructor(private http: HttpClient) {}

  public listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.url}cliente`);
  }

  public criarCliente(cliente: Cliente): void {
    this.http.post(`${this.url}cliente`, cliente).subscribe(resultado => console.log(resultado));
  }

  public alterarCliente(): void {
    this.http.put(`${this.url}cliente`, this.cliente).subscribe(resultado => console.log(resultado));
  }

  public deletarCliente(id: number | undefined): void {
    this.http.delete(`${this.url}cliente/${id}`).subscribe(resultado => console.log(resultado));
  }

  public receberIdCliente(id: number | undefined) {
    this.cliente.id = id;
  }

  public getClienteById(id: number | undefined): Observable<Cliente>{
    let obs = this.http.get<Cliente>(`${this.url}cliente/pesquisa/${id}`);

    obs.subscribe(
      (cliente: Cliente) => {
        this.onClickDetails.emit(cliente)
      }
    )

    return obs;
  }

  public enviarCliente(clienteId: number | undefined){
    let obs = this.http.get<Cliente>(`${this.url}cliente/pesquisa/${clienteId}`);

    obs.subscribe(
      (cliente: Cliente) => {
        this.onClickAddServico.emit(cliente);
      }
    )

    return obs;
}

  public novoCliente(clienteNovo: Cliente) {
    this.cliente.nome = clienteNovo.nome;
    this.cliente.sobrenome = clienteNovo.sobrenome;
    this.cliente.email = clienteNovo.email;

    this.alterarCliente();
  }

  // pesquisar clientes
  public pesquisarClientes(term: string): Observable<Cliente[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    
    this.c.nome = term;

    let obs = this.http.post<Cliente[]>(`${this.url}cliente/pesquisa`, this.c)
    obs.subscribe(res => {
        console.log(res)
      })
    return obs;
  }
  
}