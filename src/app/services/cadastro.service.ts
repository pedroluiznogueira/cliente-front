import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) {}

  public listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>("http://localhost:4200/api/cliente");
  }

  public criarCliente(cliente: Cliente): void {
    this.http.post("http://localhost:4200/api/cliente", cliente).subscribe(resultado => console.log(resultado));
  }

  public receberCliente(cliente: Cliente) {
    console.log(cliente);
  }
}
