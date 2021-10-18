import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Response } from 'src/app/models/response.model';
import { Usuario } from 'src/app/models/usuario.model';
import { catchError, map } from "rxjs/operators";
import { isJSDocThisTag } from 'typescript';

interface Resposta {
  msg:string,
  token:string
} 

@Injectable({
  providedIn: 'root'
})
export class ContaUsuarioService {

  @Output() loginValidado: EventEmitter<string> = new EventEmitter();

  response: Response =  new Response();

  constructor(private http: HttpClient) { }

  public getToken(email: string): Observable<Usuario> {
    return this.http.get("http://localhost:8080/login");
  }

  public loginUsuario(usuario: Usuario): Observable<Usuario> {
    let res: Observable<Usuario> = this.http.post<Usuario>("http://localhost:8080/login", usuario);
    
    res.subscribe((data: Usuario) => {
      console.log((<Resposta>data).token)
      window.localStorage.setItem("token", (<Resposta>data).token)
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
