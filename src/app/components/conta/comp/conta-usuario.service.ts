import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { catchError, map } from "rxjs/operators";
import { isJSDocThisTag } from 'typescript';
import { Router } from '@angular/router';
import { Wishlist } from 'src/app/models/wishlist';
import { Curso } from 'src/app/models/curso';
import { Cursowish } from 'src/app/models/cursowish';
import { Details } from 'src/app/models/details';

@Injectable({
  providedIn: 'root'
})
export class ContaUsuarioService {

  @Output() loginValidado: EventEmitter<string> = new EventEmitter();
  @Output() cursosWish: EventEmitter<Curso[]> = new EventEmitter();

  usuario?: Usuario = new Usuario();
  wishlist?: Wishlist = new Wishlist();

  usuarioToken?: Usuario = new Usuario();

  wishlistAdd?: Wishlist = new Wishlist();
  cursoWishlist?: Cursowish = new Cursowish();

  wishlistAux?: Wishlist = new Wishlist();

  idsCursosWish?: number[] = [];

  usuarioLogado?: Usuario = new Usuario();

  clicked: boolean = false;

  private url: string = "https://udeyou-api.herokuapp.com";

  response: Response =  new Response();

  dataset: Details = new Details();

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  public loginUsuario(usuario: Usuario): Observable<Usuario> {
    let res: Observable<Usuario> = this.http.post<Usuario>(`${this.url}/login`, usuario);
    

    res.subscribe(
      (data: Usuario) => {
        this.usuarioLogado = data;
        sessionStorage.setItem("usuarioLogado", JSON.stringify(data))
      }
    );

    return res;
  }

  public cadastroUsuario(novoUsuario: Usuario): Observable<Usuario> {

    let usuario = this.http.post<Usuario>(`${this.url}/cadastro`, novoUsuario);

    
    usuario.subscribe(
      (data: Usuario) => {
        // apartir do usuario/token eu trago o usuario da API
        this.getUsuarioByEmail(data)
        .subscribe(
          (data) => {
            // criando uma wishlist que contenha o usuário que eu obtive
            this.criarWishList(data);
          }
        );
    });

    return usuario;

  }

  public confirmacao(usuario: Usuario) {

    this.dataset.country = 'gfgfgf';
    this.dataset.age = 'fdsfdfd';
    this.dataset.name = usuario.nome!;
    this.dataset.email = usuario.email;

    this.http.post<Details>('https://udeyou-api.herokuapp.com/email/cadastro', this.dataset)
      .subscribe(
          (res) => {
            console.log("Email de confirmação enviado com sucesso");
            console.log(res)
      });
  }

  // 1 - quando alguém se cadastrar já quero puxar o usuário da api, apartir do token do mesmo
  public getUsuarioByEmail(usuario: Usuario): Observable<Usuario> {
    let obs = this.http.post<Usuario>(`${this.url}/find/email`, usuario);
    
    obs.subscribe();

    return obs;
  }

  // 2 - criar uma wishlist para o usuário que acaba de se cadastrar
  public criarWishList(usuario: Usuario): void {
    // settando o atributo usuario do objeto wishlist
    this.wishlist!.usuario = usuario;

    // criada a wishlist para o usuário que acaba de se cadastrar
    this.http.post(`${this.url}/wishlist/create`, this.wishlist).subscribe();
  }

  // -------------------------------------------------------------------------------------------------

  // 1 - este é o CURSO que quero adicionar na wishlist do usuário
  public getCursoId(curso: Curso): void {
    this.getWishlistByUsuario(curso);
  }

  // 2- quero trazer a WISHLIST do usuário para adicionar um curso à ela
  public getWishlistByUsuario(curso: Curso) {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    let usuario: Usuario = JSON.parse(sessionStorage.getItem("usuarioLogado")!);

    this.http.post(`${this.url}/find/email`, usuario)
      
    .subscribe(
        (usuario) => {
          console.log(usuario)
          let obs = this.http.post<Wishlist>(`${this.url}/wishlist/get/usuario`, usuario, { headers: header });
    
          obs.subscribe(
            (wishlist: Wishlist) => {
              this.addCursoWish(curso, wishlist);
            }
          );
          return obs;
        }
      )    
  }

  // 3 - aqui usamos o CURSO e a WISHLIST para passar no objeto que contém os dois como atributos, para levar para a API
  public addCursoWish(curso: Curso, wishlist: Wishlist) {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    this.cursoWishlist!.curso = curso;
    this.cursoWishlist!.wishlist = wishlist;
    console.log(wishlist)

    let obs = this.http.post<Wishlist>(`${this.url}/curso/add-curso-wish`, this.cursoWishlist, { headers: header });

    obs.subscribe(
      () => {
        
      }
    );
    return obs;
  }

  // -----------------------------------------------------------------------------------------------------------------------------

  // 1 - Busca os ids dos cursos que estão na wishlist do usuário
  public getIdsCursosWish(): Observable<number[]> {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    // tenho o token -- token do session storage
    let usuario: Usuario = JSON.parse(sessionStorage.getItem("usuarioLogado")!);

    // tenho o usuario -- getUsuarioByToken
    this.http.post<Usuario>(`${this.url}/find/email`, usuario!, { headers: header })
      .subscribe(

        (usuario: Usuario) => {
          this.http.post<Wishlist>(`${this.url}/wishlist/get/usuario`, usuario, { headers: header })
            .subscribe(

              (wishlist: Wishlist) => {
                let obs = this.http.post<number[]>(`${this.url}/curso/cursos/wish`, wishlist, { headers: header })
                  .subscribe(
                    
                    (ids) => {
                      this.getCursosWish(ids);
                    }
                  );
                  return obs;
              }
            );
        }
    );
    return of([]);
  }

  // emitindo os cursos para o componente wishlist
  @Output() emitirCursos: EventEmitter<Curso[]> = new EventEmitter();

  // 2 - buscando os cursos que tem os ids que o método acima trouxe 
  public getCursosWish(ids: number[]) {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    let obs = this.http.post<Curso[]>(`${this.url}/curso/cursos/wish/all`, ids, { headers: header });

    obs.subscribe(
      (cursos) => {
        console.log(cursos)
        this.emitirCursos.emit(cursos)
      }
    );

    return obs;
  }
}
