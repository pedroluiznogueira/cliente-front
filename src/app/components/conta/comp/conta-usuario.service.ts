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

  private url: string = "http://localhost:8080";

  response: Response =  new Response();

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  public loginUsuario(usuario: Usuario): Observable<Usuario> {
    let res: Observable<Usuario> = this.http.post<Usuario>(`${this.url}/login`, usuario);
    return res;
  }

  public cadastroUsuario(novoUsuario: Usuario): Observable<Usuario> {
    let usuario = this.http.post<Usuario>(`${this.url}/cadastro`, novoUsuario);
    
    usuario.subscribe(
      (data: Usuario) => {
        this.usuario = data;
        this.getUsuarioByToken();
    });

    return usuario;

  }

  public getUsuarioByToken(): Observable<Usuario> {
    let obs = this.http.post<Usuario>(`${this.url}/find/token`, this.usuario);
    
    obs.subscribe(
      (data) => {
        this.usuarioToken = data;
        this.criarWishList();
      }
    );

    return obs;
  }


  public criarWishList(): void {
    this.wishlist!.usuario = this.usuarioToken;
    this.http.post(`${this.url}/wishlist/create`, this.wishlist).subscribe();
  }

  public getCursoId(curso: Curso): void {
    this.getWishlistByUsuario();

  }

  public getWishlistByUsuario(): Observable<Wishlist> {
    let obs = this.http.post<Wishlist>(`${this.url}/wishlist/get/usuario`, this.usuarioToken);
    
    obs.subscribe(
      (data) => {
        this.wishlistAdd = data;
        console.log(this.wishlistAdd)
      }
    );
    
    return obs;
  }
}
