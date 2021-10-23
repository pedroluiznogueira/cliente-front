import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Professor } from '../models/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private url: string = "http://localhost:8080";

  professor: Professor = new Professor();
  c: Professor = new Professor();

  @Output() onClickDetails: EventEmitter<Professor> = new EventEmitter<Professor>();
  @Output() onClickAddCurso: EventEmitter<Professor> = new EventEmitter<Professor>();


  constructor(private http: HttpClient) { }

  public listarProfessores(): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.url}/professor/professores`);
  }

  public criarProfessor(professor: Professor): void {
    this.http.post(`${this.url}/professor/create`, professor).subscribe();
  }

  public alterarProfessor(): void {
    this.http.put(`${this.url}/professor/update`, this.professor).subscribe();
  }

  public deletarProfessor(id: number | undefined): void {
    this.http.delete(`${this.url}/professor/delete/${id}`).subscribe();
  }

  public receberIdProfessor(id: number | undefined) {
    this.professor.id = id;
  }

  public getProfessorById(id: number | undefined): Observable<Professor>{
    let obs = this.http.get<Professor>(`${this.url}/professor/find/${id}`);

    obs.subscribe(
      (professor: Professor) => {
        this.onClickDetails.emit(professor)
      }
    )
    return obs;
  }

  public enviarProfessor(professorId: number | undefined){
    let obs = this.http.get<Professor>(`${this.url}/professor/search/${professorId}`);

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
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    
    this.c.nome = term;

    let obs = this.http.post<Professor[]>(`${this.url}/professor/search`, this.c)
    obs.subscribe(res => {
        console.log(res)
      })
    return obs;
  }
}
