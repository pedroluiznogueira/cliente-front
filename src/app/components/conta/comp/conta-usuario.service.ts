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

  usuario?: Usuario = new Usuario();
  wishlist?: Wishlist = new Wishlist();

  usuarioToken?: Usuario = new Usuario();

  wishlistAdd?: Wishlist = new Wishlist();
  cursoWishlist?: Cursowish = new Cursowish();

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
        // settando o usuario que veio como resposta na classe, para passar seu token em getUsuarioByToken
        this.usuario = data;

        // apartir do usuario/token eu trago o usuario da API
        this.getUsuarioByToken();
    });

    return usuario;

  }

  public getUsuarioByToken(): Observable<Usuario> {
    let obs = this.http.post<Usuario>(`${this.url}/find/token`, this.usuario);
    
    obs.subscribe(
      (data) => {
        // usuário retornado apartir do token de quem fez o cadastro
        this.usuarioToken = data;

        // criando uma wishlist que contenha o usuário que eu obtive
        this.criarWishList();
      }
    );

    return obs;
  }


  public criarWishList(): void {
    // settando o atributo usuario do objeto wishlist
    this.wishlist!.usuario = this.usuarioToken;

    this.http.post(`${this.url}/wishlist/create`, this.wishlist).subscribe();
  }

  public getCursoId(curso: Curso): void {
    this.getWishlistByUsuario();

    this.cursoWishlist!.curso = curso;
    this.cursoWishlist!.wishlist = this.wishlistAdd;
  }

  public getWishlistByUsuario(): Observable<Wishlist> {
    let obs = this.http.post<Wishlist>(`${this.url}/wishlist/get/usuario`, this.usuarioLogado);
    
    obs.subscribe(
      (data) => {
        this.wishlistAdd = data;
        console.log(this.wishlistAdd)
        this.teste();
      }
    );
    
    return obs;
  }

  teste() {
    var conta = {
      obj: {
        tUm: "fshfjshnfjs",
        tDois: "fshfjshnfjs"
      },
      objD: {
        tUm: "fshfjshnfjs",
        tDois: "fshfjshnfjs"
      }
    }
    let obs = this.http.post<Wishlist>(`${this.url}/wishlist/teste`, conta);

    obs.subscribe(
      (data) => {
        console.log(data)
      }
    );
    return obs;
  }
}
