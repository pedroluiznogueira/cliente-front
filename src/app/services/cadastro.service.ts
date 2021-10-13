import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) {}
  cliente: Cliente = new Cliente();

  public listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>("http://localhost:4200/api/cliente");
  }

  public criarCliente(cliente: Cliente): void {
    this.http.post("http://localhost:4200/api/cliente", cliente).subscribe(resultado => console.log(resultado));
  }

  public receberCliente(cliente: Cliente) {
    this.cliente.id = cliente.id;
  }

  public dadosAlterados(clienteNovo: Cliente) {
    this.cliente.nome = clienteNovo.nome;
    this.cliente.sobrenome = clienteNovo.sobrenome;
    this.cliente.email = clienteNovo.email;
  }

  public alterarCliente(): void {
    console.log(this.cliente)
    this.http.put("http://localhost:4200/api/cliente", this.cliente).subscribe(resultado => console.log(resultado));
  }

}