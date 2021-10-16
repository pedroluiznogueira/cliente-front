import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  @Output() loginValidado: EventEmitter<string> = new EventEmitter();

  response: Response =  new Response();

  constructor(private http: HttpClient) { }

  public loginUsuario(usuario: Usuario): Observable<Response> {
    let res: Observable<Response> = this.http.post<Response>("http://localhost:4200/api/login", usuario);
    res.subscribe(
      (data: Response) => {
        if (data.status == "erro") {
          console.log("não permitir login")
          this.loginValidado.emit(data.status);
        } else {
          console.log("permitir login")
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
