import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public loginUsuario(usuario: Usuario): void {
    this.http.post("http://localhost:4200/api/login", usuario).subscribe(resultado => console.log(resultado));
  }

  public cadastroUsuario(novoUsuario: Usuario): void {
    console.log(novoUsuario);
    this.http.post("http://localhost:4200/api/registrar", novoUsuario).subscribe(resultado => console.log(resultado));    
  }
}
