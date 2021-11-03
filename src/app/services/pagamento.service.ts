import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  valorTotal?: number;
  pedidos: Pedido[] = [];
  cursosPedidos: Curso[] = [];
  
  constructor(
    private http: HttpClient
  ) { }

  public cursosComprados(cursos: Curso[]): Observable<Usuario> {

    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    let usuario: Usuario = JSON.parse(sessionStorage.getItem("usuarioLogado")!);
    this.pedidos = [
      {
        valorTotal:this.valorTotal,
        cursos: cursos
      }
    ]
    usuario!.pedidos = this.pedidos!;

    let obs = this.http.post<Usuario>(`${this.url}/pedido`, usuario, { headers: header })
      
    obs.subscribe(
        () => {
          
        }
    );
    return obs;
  }

  public getCursosComprados(): Observable<Usuario> {

    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    let usuario: Usuario = JSON.parse(sessionStorage.getItem("usuarioLogado")!);

    let obs = this.http.post<Usuario>(`${this.url}/find/email`, usuario, { headers:header });
      
    obs.subscribe();
    return obs;
  }

  public receberValorTotal(valorTotal: number): void{
    this.valorTotal = valorTotal;
    console.log(this.valorTotal)
  }
}
