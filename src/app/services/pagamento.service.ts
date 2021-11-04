import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';
import { Cursopedido } from '../models/cursopedido';
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

  pedido?: Pedido = new Pedido();
  cursoPedido: Cursopedido = new Cursopedido();
  
  constructor(
    private http: HttpClient
  ) { }

  // 1 - trazer usuário que quero criar o pedido dele
  public criarPedido(cursos: Curso[]) {
    let usuario: Usuario = JSON.parse(sessionStorage.getItem("usuarioLogado")!);

    // trazendo o usuário
    let obs = this.http.post<Usuario>(`${this.url}/find/email`, usuario)
      .subscribe(
        (usuario) => {

          // criando um pedido para o usuário que está pedindo
          this.pedido!.usuario = usuario;

          this.http.post(`${this.url}/pedido/create`, this.pedido)
            .subscribe(
              (pedido) => {
                this.addCursoPedido(cursos, pedido)
              }
          );
        }
      );
  }

  // 2 - adicionar cursos ao pedido do usuário
  public addCursoPedido(cursos: Curso[], pedido: Pedido) {
    this.cursoPedido.cursos = cursos;
    this.cursoPedido.pedido = pedido;

    let obs = this.http.post(`${this.url}/curso/add-curso-pedido`, this.cursoPedido);

  } 

  @Output() emitirCursos: EventEmitter<Curso[]> = new EventEmitter();

  // 3 - trazer os cursos que estão no pedido do usuário
  public getCursosPedidos() {
    // trazendo o usuário
    let usuario: Usuario = JSON.parse(sessionStorage.getItem("usuarioLogado")!);

    this.http.post<Usuario>(`${this.url}/find/email`, usuario!)
      
      .subscribe(
        (usuario: Usuario) => {
          this.http.post<Pedido[]>(`${this.url}/pedido/get/usuario`, usuario)
            
            .subscribe(
              (pedidos: Pedido[]) => {
                  let obs = this.http.post<number[]>(`${this.url}/curso/cursos/pedido`, pedidos)
                  
                  .subscribe(
                    (ids) => {

                      this.http.post<Curso[]>(`${this.url}/curso/cursos/pedido/all`, ids)
                        
                        .subscribe(
                          (cursos) => {
                            this.emitirCursos.emit(cursos)
                          }
                        );
                    }
                  );

                  return obs;
              }
            );
        }
      );
  }


  // public cursosComprados(cursos: Curso[]): Observable<Usuario> {

  //   let header: HttpHeaders = new HttpHeaders({
  //     'Authorization': sessionStorage.getItem('token')!
  //   });

  //   let usuario: Usuario = JSON.parse(sessionStorage.getItem("usuarioLogado")!);
  //   this.pedidos = [
  //     {
  //       valorTotal:this.valorTotal,
  //       // cursos: cursos
  //     }
  //   ]
  //   usuario!.pedidos = this.pedidos!;

  //   let obs = this.http.post<Usuario>(`${this.url}/pedido`, usuario, { headers: header })
      
  //   obs.subscribe(
  //       () => {
          
  //       }
  //   );
  //   return obs;
  // }

  // public getCursosComprados(): Observable<Usuario> {

  //   let header: HttpHeaders = new HttpHeaders({
  //     'Authorization': sessionStorage.getItem('token')!
  //   });

  //   let usuario: Usuario = JSON.parse(sessionStorage.getItem("usuarioLogado")!);

  //   let obs = this.http.post<Usuario>(`${this.url}/find/email`, usuario, { headers:header });
      
  //   obs.subscribe();
  //   return obs;
  // }

  public receberValorTotal(valorTotal: number): void{
    this.valorTotal = valorTotal;
    console.log(this.valorTotal)
  }
}
