import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  
  private apiURL: String;

  constructor(private http: HttpClient) { 
    this.apiURL = 'http://localhost:8080'; 
  }

  public listarProdutos(): void {
    this.http.get(`${this.apiURL}/api/cliente`).subscribe(resultado => console.log(resultado));
  }


}
