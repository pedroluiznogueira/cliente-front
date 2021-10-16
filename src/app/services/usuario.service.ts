import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  response: Response =  new Response();

  constructor(private http: HttpClient) { }

  public loginUsuario(usuario: Usuario): Observable<Response> {
    let res = this.http.post<Response>("http://localhost:4200/api/login", usuario);
    res.subscribe(
      (data: Response) => {
        if (data.msg == "login realizado com sucesso") {
          console.log("permitir login")
        } else {
          console.log("não permitir login")
        }
      }
      )
    return res;
  }

  public cadastroUsuario(novoUsuario: Usuario): void {
    console.log(novoUsuario);
    this.http.post("http://localhost:4200/api/registrar", novoUsuario).subscribe(resultado => console.log(resultado));    
  }
}
