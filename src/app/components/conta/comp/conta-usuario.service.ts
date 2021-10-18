import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Response } from 'src/app/models/response.model';
import { Usuario } from 'src/app/models/usuario.model';
import { catchError, map } from "rxjs/operators";
import { isJSDocThisTag } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class ContaUsuarioService {

  @Output() loginValidado: EventEmitter<string> = new EventEmitter();

  response: Response =  new Response();

  constructor(private http: HttpClient) { }

  public loginUsuario(usuario: Usuario): Observable<Usuario> {
    let res: Observable<Usuario> = this.http.post<Usuario>("http://localhost:8080/login", usuario);
    
    res.subscribe((data: Usuario) => {
      window.sessionStorage.setItem("token", data.token!);
    }
    )
    return res;
  }

  public cadastroUsuario(novoUsuario: Usuario): Observable<Usuario> {
    let usuario = this.http.post<Usuario>("http://localhost:8080/cadastro", novoUsuario);
    
    usuario.subscribe((data: Usuario) => {
    });

    return usuario;

  }
}
