import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Professor } from '../models/professor';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {  

  private url: string = "http://localhost:8080";

  professor: Professor = new Professor();
  c: Professor = new Professor();

  @Output() onClickDetails: EventEmitter<Professor> = new EventEmitter<Professor>();
  @Output() onClickAddCurso: EventEmitter<Professor> = new EventEmitter<Professor>();
  @Output() emitirProfessor: EventEmitter<Professor> = new EventEmitter<Professor>();


  constructor(private http: HttpClient) { }

  public listarProfessores(): Observable<Professor[]> {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    return this.http.get<Professor[]>(`${this.url}/professor/professores`, { headers: header });
  }

  public criarProfessor(professor: Professor): void {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    this.http.post(`${this.url}/professor/create`, professor, { headers: header }).subscribe(
      (prof) => {
        this.emitirProfessor.emit(prof)
      }
    );
  }

  public alterarProfessor(): void {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    this.http.put(`${this.url}/professor/update`, this.professor, { headers: header }).subscribe();
  }

  public deletarProfessor(id: number | undefined): void {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    this.http.delete(`${this.url}/professor/delete/${id}`, { headers: header }).subscribe();
  }

  public receberIdProfessor(id: number | undefined) {
    this.professor.id = id;
  }

  public getProfessorById(id: number | undefined): Observable<Professor>{
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    let obs = this.http.get<Professor>(`${this.url}/professor/find/${id}`, { headers: header });

    obs.subscribe(
      (professor: Professor) => {
        this.onClickDetails.emit(professor)
      }
    )
    return obs;
  }

  public enviarProfessor(professorId: number | undefined){
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    let obs = this.http.get<Professor>(`${this.url}/professor/search/${professorId}`, { headers: header });

    obs.subscribe(
      (professor: Professor) => {
        this.onClickAddCurso.emit(professor);
      }
    )

    return obs;
}

  public novoProfessor(novoProfessor: Professor) {
    this.professor.nome = novoProfessor.nome;
    this.professor.sobrenome = novoProfessor.sobrenome;
    this.professor.email = novoProfessor.email;

    this.alterarProfessor();
  }

  // pesquisar clientes
  public pesquisarProfessores(term: string): Observable<Professor[]> {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    
    this.c.nome = term;

    let obs = this.http.post<Professor[]>(`${this.url}/professor/search`, this.c, { headers: header })
    obs.subscribe(res => {
        console.log(res)
      })
    return obs;
  }

  public getProfessorByUsuario(usuario:Usuario): Professor{
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    this.http.post<Professor>(`${this.url}/professorByUsuario`, usuario, { headers: header })
    .subscribe(res => {this.professor = res})


    return this.professor;

  }
}
