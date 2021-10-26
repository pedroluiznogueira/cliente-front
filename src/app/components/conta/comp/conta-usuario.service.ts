import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { catchError, map } from "rxjs/operators";
import { isJSDocThisTag } from 'typescript';
import { Router } from '@angular/router';
import { Wishlist } from 'src/app/models/wishlist';
import { Curso } from 'src/app/models/curso';
import { Cursowish } from 'src/app/models/cursowish';

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

  private url: string = "http://localhost:8080";

  response: Response =  new Response();

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  public loginUsuario(usuario: Usuario): Observable<Usuario> {
    let res: Observable<Usuario> = this.http.post<Usuario>(`${this.url}/login`, usuario);
    console.log("O usuario acaba de logar: ")
    console.log(usuario)

    res.subscribe(
      (data: Usuario) => {
        this.usuarioLogado = data;
      }
    );

    return res;
  }

  public cadastroUsuario(novoUsuario: Usuario): Observable<Usuario> {
    let usuario = this.http.post<Usuario>(`${this.url}/cadastro`, novoUsuario);
    
    usuario.subscribe(
      (data: Usuario) => {
        // apartir do usuario/token eu trago o usuario da API
        this.getUsuarioByToken(data);
    });

    return usuario;

  }

  // 1 - quando alguém se cadastrar já quero puxar o usuário da api, apartir do token do mesmo
  public getUsuarioByToken(usuario: Usuario): Observable<Usuario> {
    let obs = this.http.post<Usuario>(`${this.url}/find/token`, usuario);
    
    obs.subscribe(
      (data) => {
        // criando uma wishlist que contenha o usuário que eu obtive
        this.criarWishList(data);
      }
    );

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

  // 1 - este é o curso que quero adicionar na wishlist do usuário
  public getCursoId(curso: Curso): void {
    this.getWishlistByUsuario();
    this.cursoWishlist!.curso = curso;
  }

  // 2- quero traze a wishlist do usuário para adicionar um curso à ela
  public getWishlistByUsuario(): Observable<Wishlist> {
    let obs = this.http.post<Wishlist>(`${this.url}/wishlist/get/usuario`, this.usuarioLogado);
    
    obs.subscribe(
      (data: Wishlist) => {
        this.wishlistAdd = data;
        this.cursoWishlist!.wishlist = this.wishlistAdd;
        this.addCursoWish();
      }
    );
    
    return obs;
  }


  public addCursoWish() {
    let obs = this.http.post<Wishlist>(`${this.url}/curso/teste`, this.cursoWishlist);

    obs.subscribe(
      (data) => {
        this.wishlistAux = this.cursoWishlist!.wishlist!;
        this.getIdsCursosWish();
      }
    );
    return obs;
  }

  public getIdsCursosWish(): Observable<number[]> {
    let obs = this.http.post<number[]>(`${this.url}/curso/cursos/wish`, this.wishlistAux);

    obs.subscribe(
      (data) => {
        this.idsCursosWish = data;
        console.log(this.idsCursosWish)
        
      }
    );

    return obs;
  }

  public getCursosWish() {
    let obs = this.http.post<Curso[]>(`${this.url}/curso/cursos/wish/all`, this.idsCursosWish);

    obs.subscribe();

    return obs;
  }
}
