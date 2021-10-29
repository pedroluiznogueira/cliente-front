import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';
import { Pedido } from '../models/pedido';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  url?: string = "http://localhost:8080";

  pedidos: Pedido[] = [];
  cursosPedidos: Curso[] = [];
  
  constructor(
    private http: HttpClient
  ) { }

  public cursosComprados(cursos: Curso[]): Observable<Usuario> {
    let usuario: Usuario = JSON.parse(sessionStorage.getItem("usuarioLogado")!);
    this.pedidos = [
      {
        cursos: cursos
      }
    ]
    usuario!.pedidos = this.pedidos!;

    let obs = this.http.post<Usuario>(`${this.url}/pedido`, usuario);
    return obs;
  }


}
