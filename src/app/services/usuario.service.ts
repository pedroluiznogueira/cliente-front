import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public loginUsuario(usuario: Usuario): Observable<Object> {
    let objeto = this.http.post<Object>("http://localhost:4200/api/login", usuario);
    objeto.subscribe(
      response => console.log(response)
      )
    return objeto;
  }

  public cadastroUsuario(novoUsuario: Usuario): void {
    console.log(novoUsuario);
    this.http.post("http://localhost:4200/api/registrar", novoUsuario).subscribe(resultado => console.log(resultado));    
  }
}
