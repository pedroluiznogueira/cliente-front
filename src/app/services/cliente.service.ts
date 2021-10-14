import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  cliente: Cliente = new Cliente();

  constructor(private http: HttpClient) {}

  public listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>("http://localhost:4200/api/cliente");
  }

  public criarCliente(cliente: Cliente): void {
    this.http.post("http://localhost:4200/api/cliente", cliente).subscribe(resultado => console.log(resultado));
  }

  public alterarCliente(): void {
    this.http.put("http://localhost:4200/api/cliente", this.cliente).subscribe(resultado => console.log(resultado));
  }

  public deletarCliente(id: number | undefined): void {
    this.http.delete(`http://localhost:4200/api/cliente/${id}`).subscribe(resultado => console.log(resultado));
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
}