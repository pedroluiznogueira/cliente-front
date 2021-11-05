import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  @Output() emitirModulo: EventEmitter<Modulocurso[]> = new EventEmitter<Modulocurso[]>();
  @Output() onEmitirCursoUpdate: EventEmitter<Curso> = new EventEmitter<Curso>();
  @Output() emitirCursoPlataforma: EventEmitter<Curso> = new EventEmitter<Curso>();
  @Output() emitirCursoConteudo: EventEmitter<Curso> = new EventEmitter<Curso>();
  @Output() emitirCursoAprendizado: EventEmitter<Curso> = new EventEmitter<Curso>();

  constructor(
    private http: HttpClient
  ) { }

  public listarCursos(): Observable<Curso[]> {

    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    return this.http.get<Curso[]>(`${this.url}/curso/cursos`, { headers: header });
  }

  public criarCurso(curso: Curso): void {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    this.http.post(`${this.url}/curso/create`, curso, { headers: header })
      .subscribe(
        (curso) => {
          console.log()
          this.emitirCurso.emit(curso);
        }
      );
  }

  public deletarCurso(id: number | undefined): void {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    this.http.delete(`${this.url}/curso/delete/${id}`, { headers: header }).subscribe();
  }

  public receberIdCurso(id: number | undefined): Observable<Curso> {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    let obs = this.http.get<Curso>(`${this.url}/curso/find/${id}`, { headers: header });
    
    obs.subscribe(
      (curso: Curso) => {
        this.onClickCursoDetails.emit(curso)
        console.log(curso)
      }
    );
    return obs;
  }

  public alterarCurso(curso: Curso): void {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    this.http.put(`${this.url}/curso/update`, curso, { headers: header }).subscribe();
  }

  public pesquisarCursos(term: string): Observable<Curso[]> {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    if (!term.trim()) {
      return of([])
    }

    this.cursoPesq.titulo = term;

    let obs =  this.http.post<Curso[]>(`${this.url}/curso/search`, this.cursoPesq, { headers: header });
    obs.subscribe(
      (res) => {
        console.log(res)
      }                  
    )
    return obs;
  }

  public listarCursosProfessor(professor: Professor): Observable<Curso[]> {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    let obs =  this.http.post<Curso[]>(`${this.url}/curso/find-by-professor`, professor, { headers: header });

    obs.subscribe()

    return obs;
  }
  public listarCursosByProfessor(professor: Professor): Observable<Curso[]> {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    let obs =  this.http.post<Curso[]>(`${this.url}/curso/find-by-professor`, professor, { headers: header });

    return obs;
  }

  public criarModuloCurso(cursoModulo: Modulocurso): Observable<Modulocurso>{
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    let obs = this.http.post<Modulocurso>(`${this.url}/curso/modulo/create`, cursoModulo, { headers: header });
    
    obs.subscribe(
      (resp) => {
        console.log(resp)
      }
    );
    return obs;
  }

  public enviarCurso(curso: Curso) {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    this.http.post<Modulocurso[]>(`${this.url}/curso/modulo/find-by-curso`, curso, { headers: header })
      .subscribe(
        (modulo: Modulocurso[]) => {
          this.emitirModulo.emit(modulo);
        }
      );
  
      let obs = this.http.get<Curso>(`${this.url}/curso/find/${curso.id}`, { headers: header });
  
      obs.subscribe(
        (curso: Curso) => {
          this.emitirCursoAprendizado.emit(curso)
        }
      );
  }

  public emitirCursoUpdate(curso:Curso): void{
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    let obs = this.http.get<Curso>(`${this.url}/curso/find/${curso.id}`, { headers: header });

    obs.subscribe(
      (curso: Curso) => {
        this.onEmitirCursoUpdate.emit(curso)
      }
    );
  }

  public cursoPlataforma(curso: Curso) {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    let obs = this.http.get<Curso>(`${this.url}/curso/find/${curso.id}`, { headers: header });

    obs.subscribe(
      (curso) => {
        this.emitirCursoPlataforma.emit(curso)
      }
    );
  }

  public enviarCursoConteudo(curso: Curso) {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    let obs = this.http.get<Curso>(`${this.url}/curso/find/${curso.id}`, { headers: header });

    obs.subscribe(
      (curso) => {
        this.emitirCursoConteudo.emit(curso)
      }
    );

  }
}
