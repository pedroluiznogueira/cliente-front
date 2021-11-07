import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curso } from '../models/curso';
import { Cursopedido } from '../models/cursopedido';
import { Pedido } from '../models/pedido';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  url?: string = "https://udeyou-api.herokuapp.com";

  valorTotal?: number;
  pedidos: Pedido[] = [];
  cursosPedidos: Curso[] = [];

  pedido?: Pedido = new Pedido();
  cursoPedido: Cursopedido = new Cursopedido();
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // 1 - trazer usuário que quero criar o pedido dele
  public criarPedido(cursos: Curso[]) {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    let usuario: Usuario = JSON.parse(sessionStorage.getItem("usuarioLogado")!);

    // trazendo o usuário
    let obs = this.http.post<Usuario>(`${this.url}/find/email`, usuario, { headers: header })
      .subscribe(
        (usuario) => {

          // criando um pedido para o usuário que está pedindo
          this.pedido!.usuario = usuario;

          this.http.post<Pedido>(`${this.url}/pedido/create`, this.pedido, { headers: header })
            .subscribe(
              (pedido: Pedido) => {
                this.addCursoPedido(cursos, pedido)
              }
          );
        }
      );
  }

  // 2 - adicionar cursos ao pedido do usuário
  public addCursoPedido(cursos: Curso[], pedido: Pedido) {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    this.cursoPedido.cursos = cursos;
    this.cursoPedido.pedido = pedido;

    let obs = this.http.post(`${this.url}/curso/add-curso-pedido`, this.cursoPedido, { headers: header })
    .subscribe()

  } 

  @Output() emitirCursos: EventEmitter<Curso[]> = new EventEmitter();

  // 3 - trazer os cursos que estão no pedido do usuário
  public getCursosPedidos(boo: boolean): Observable<Curso[]>{
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    // trazendo o usuário
    let usuario: Usuario = JSON.parse(sessionStorage.getItem("usuarioLogado")!);

    this.http.post<Usuario>(`${this.url}/find/email`, usuario!, { headers: header })
      
      .subscribe(
        (usuario: Usuario) => {
          this.http.post<Pedido[]>(`${this.url}/pedido/get/usuario`, usuario, { headers: header })
            
            .subscribe(
              (pedidos: Pedido[]) => {
                  this.http.post<number[]>(`${this.url}/curso/cursos/pedido`, pedidos, { headers: header })
                  
                  .subscribe(
                    (ids) => {

                      let obs = this.http.post<Curso[]>(`${this.url}/curso/cursos/pedido/all`, ids, { headers: header })
                        
                        .subscribe(
                          (cursos) => {
                            this.emitirCursos.emit(cursos)
                            if (boo) {
                              this.router.navigate(['/aprendizado'])
                            }
                          }
                        );
                      
                      return obs;
                    }
                  );
              }
            );
        }
      );

      return of([]);
  }

  public receberValorTotal(valorTotal: number): void{
    this.valorTotal = valorTotal;
    console.log(this.valorTotal)
  }
}
