import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public cadastroAdmin(admin: Usuario): void {
    console.log(admin)
    this.http.post("http://localhost:8080/cadastro", admin).subscribe(resultado => console.log(resultado))
  }
}
