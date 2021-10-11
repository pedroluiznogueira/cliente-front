import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  
  private apiURL: String;

  constructor(private http: HttpClient) { 
    this.apiURL = 'http://localhost:8080'; 
  }

  public listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiURL}/api/cliente`);
  }
}
