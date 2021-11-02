import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Curso } from '../models/curso';
import { Modulocurso } from '../models/modulocurso';
import { Professor } from '../models/professor';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private url: string = "http://localhost:8080";
  cursoPesq: Curso = new Curso();
  curso: Curso = new Curso();

  @Output() onClickCursoDetails: EventEmitter<Curso> = new EventEmitter<Curso>();
  @Output() emitirCurso: EventEmitter<Curso> = new EventEmitter<Curso>();

  constructor(
    private http: HttpClient
  ) { }

  public listarCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.url}/curso/cursos`);
  }

  public criarCurso(curso: Curso): void {
    this.http.post(`${this.url}/curso/create`, curso)
      .subscribe(
        (curso) => {
          this.emitirCurso.emit(curso);
        }
      );
  }

  public deletarCurso(id: number | undefined): void {
    this.http.delete(`${this.url}/curso/delete/${id}`).subscribe();
  }

  public receberIdCurso(id: number | undefined): Observable<Curso> {
    let obs = this.http.get<Curso>(`${this.url}/curso/find/${id}`);
    
    obs.subscribe(
      (curso: Curso) => {
        this.onClickCursoDetails.emit(curso)
        console.log(curso)
      }
    );
    return obs;
  }

  public novoCurso(curso: Curso): void {
    this.curso.titulo = curso.titulo;
    this.curso.descricao = curso.descricao;
    this.curso.valor = curso.valor;

    this.alterarCurso();
  }

  public alterarCurso(): void {
    this.http.put(`${this.url}/curso/update`, this.curso).subscribe();
  }

  public pesquisarCursos(term: string): Observable<Curso[]> {
    if (!term.trim()) {
      return of([])
    }

    this.cursoPesq.titulo = term;

    let obs =  this.http.post<Curso[]>(`${this.url}/curso/search`, this.cursoPesq);
    obs.subscribe(
      (res) => {
        console.log(res)
      }                  
    )
    return obs;
  }

  public listarCursosProfessor(professor: Professor): Observable<Curso[]> {

    let obs =  this.http.post<Curso[]>(`${this.url}/curso/find-by-professor`, professor);

    obs.subscribe(
      (cursos: Curso[]) => {
        console.log(cursos)
      }
    )

    return obs;
  }

  public criarModuloCurso(cursoModulo: Modulocurso): Observable<Modulocurso>{
    let obs = this.http.post<Modulocurso>(`${this.url}/curso/modulo`, cursoModulo);
    
    obs.subscribe(
      (resp) => {
        console.log(resp)
      }
    );
    return obs;
  }
}
