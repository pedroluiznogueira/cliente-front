import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  cliente: Cliente = new Cliente();

  constructor(private http: HttpClient) {}

  public listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>("https://consultoria-api.herokuapp.com/cliente");
  }

  public criarCliente(cliente: Cliente): void {
    this.http.post("https://consultoria-api.herokuapp.com/cliente", cliente).subscribe(resultado => console.log(resultado));
  }

  public alterarCliente(): void {
    this.http.put("https://consultoria-api.herokuapp.com/cliente", this.cliente).subscribe(resultado => console.log(resultado));
  }

  public deletarCliente(id: number | undefined): void {
    this.http.delete(`https://consultoria-api.herokuapp.com/cliente/${id}`).subscribe(resultado => console.log(resultado));
  }

  public receberIdCliente(id: number | undefined) {
    this.cliente.id = id;
  }

  public novoCliente(clienteNovo: Cliente) {
    this.cliente.nome = clienteNovo.nome;
    this.cliente.sobrenome = clienteNovo.sobrenome;
    this.cliente.email = clienteNovo.email;

    this.alterarCliente();
  }

  // pesquisar clientes
  public pesquisarClientes(cliente: Cliente): Observable<Cliente[]> {
    if (cliente.nome?.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.post<Cliente[]>("http://localhost:8080/cliente/pesquisa", cliente);
  }
}