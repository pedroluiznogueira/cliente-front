import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Curso } from 'src/app/models/curso';
import { Usuario } from 'src/app/models/usuario.model';
import { Wishlist } from 'src/app/models/wishlist';
import { CursosService } from 'src/app/services/cursos.service';
import { PagamentoService } from 'src/app/services/pagamento.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { ContaUsuarioService } from '../../conta/comp/conta-usuario.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  urlImagem?: string = "https://udeyou.s3.sa-east-1.amazonaws.com/"

  wishlist: Wishlist = new Wishlist();

  panelOpenState = false;
  cursos: Array<Curso> = new Array();
  sessionCursos: Curso[] = [];

  pesquisando: boolean = true;

  cursosFiltrados$!: Observable<Curso[]>
  private pesquisarTerms = new Subject<string>();

  cursosPedidos: Curso[] = [];
  
  constructor(
    private cursosService: CursosService,
    private wishlistService: WishlistService,
    private contaUsuarioService: ContaUsuarioService,
    private pagamentoService: PagamentoService,
    private router: Router
  ) { }

  public pesquisar(term: string): void {
    this.pesquisando = false;
    this.pesquisarTerms.next(term);
  }

  ngOnInit(): void {
    this.listarCursos();
    
    this.cursosFiltrados$ = this.pesquisarTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.cursosService.pesquisarCursos(term)),
    );
  }

  public listarCursos(): void {
    this.cursosService.listarCursos().subscribe(
      cursos => this.cursos = cursos
    );
  }

  public sessionCurso(curso: Curso) {

    let cursosGet: Curso[] = JSON.parse(sessionStorage.getItem("cursos")!) 
    
    if (cursosGet == null) {
      cursosGet = [];
    }

    for (let c of cursosGet) {
      if (c.titulo == curso.titulo) {
        return
      }
    }
    cursosGet.push(curso);
    window.sessionStorage.setItem("cursos", JSON.stringify(cursosGet));
  }

  public enviarIdCurso(curso: Curso): void {
    this.cursosService.receberIdCurso(curso.id);
  }

  public enviarCursoId(curso: Curso){
    this.pagamentoService.getCursosPedidos(false)
    .subscribe(
      () => {
        this.pagamentoService.emitirCursos
          .subscribe(
            (resp) => {
              if (resp.length == 0) {
                this.contaUsuarioService.getCursoId(curso);
              } 

              for (let c of resp) {
                if (curso.titulo === c.titulo) {
                  console.log("curso ja comprado")
                  this.router.navigate(['/cursos'])
                  return
                }
                
              }
              this.contaUsuarioService.getCursoId(curso);
              
            }
          );          
      }
    );
  }
}
