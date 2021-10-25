import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  panelOpenState = false;
  cursos: Array<Curso> = new Array();
  sessionCursos: Curso[] = [];

  pesquisando: boolean = true;

  cursosFiltrados$!: Observable<Curso[]>
  private pesquisarTerms = new Subject<string>();
  
  constructor(
    private cursosService: CursosService
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
    this.sessionCursos.push(curso);
    window.sessionStorage.setItem("cursos", JSON.stringify(this.sessionCursos));
  }

  public enviarIdCurso(curso: Curso): void {
    this.cursosService.receberIdCurso(curso.id);
  }
}
