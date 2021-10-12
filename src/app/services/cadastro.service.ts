import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  @Output() onConsultarClick: EventEmitter<null> = new EventEmitter();
  
  private apiURL: String;

  constructor(private http: HttpClient) { 
    this.apiURL = 'http://localhost:8080'; 
  }

  public listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>("http://localhost:4200/api/cliente");
  }

  public criarCliente(cliente: Cliente): void {
    this.http.post("http://localhost:4200/api/cliente", cliente);
  }

  public emitir(): void {
    this.onConsultarClick.emit();
  }
}
