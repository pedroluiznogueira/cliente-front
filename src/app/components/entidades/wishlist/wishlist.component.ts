import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Curso } from 'src/app/models/curso';
import { Usuario } from 'src/app/models/usuario.model';
import { CursosService } from 'src/app/services/cursos.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { ContaUsuarioService } from '../../conta/comp/conta-usuario.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  cursos: Curso[] = [];
  sessionCursos: Curso[] = [];

  pesquisando: boolean = true;

  cursosFiltrados$!: Observable<Curso[]>
  private pesquisarTerms = new Subject<string>();

  constructor(
    private cursosService: CursosService,
    private wishlistService: WishlistService,
    private contaUsuarioService: ContaUsuarioService
  ) { }

  public pesquisar(term: string): void {
    this.pesquisando = false;
    this.pesquisarTerms.next(term);
  }

  ngOnInit(): void {
    this.contaUsuarioService.emitirCursos
      .subscribe(
        (cursos) => {
          this.cursos = cursos;          
        }
      );

      this.cursosFiltrados$ = this.pesquisarTerms.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.cursosService.pesquisarCursos(term)),
      );
  }

  public sessionCurso(curso: Curso) {
    let cursosGet: Curso[] = JSON.parse(sessionStorage.getItem("cursos")!) 
    
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
    this.contaUsuarioService.getCursoId(curso);
  }
}
