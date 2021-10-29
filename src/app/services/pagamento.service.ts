import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { Pedido } from '../models/pedido';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  url?: string = "http://localhost:8080";

  pedidos: Pedido[] = [];
  
  constructor(
    private http: HttpClient
  ) { }

  public cursosComprados(cursos: Curso[]): void {
    let usuario: Usuario = JSON.parse(sessionStorage.getItem("usuarioLogado")!);

    this.pedidos = [
      {
        cursos: cursos
      }
    ]

    usuario!.pedidos = this.pedidos!;

    this.http.post(`${this.url}/pedido`, usuario)
      .subscribe(
        (resp) => {
          console.log(resp)
        }
    );
  }


}
