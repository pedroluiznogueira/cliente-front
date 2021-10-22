import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Professor } from '../models/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private url: string = "http://localhost:8080/";

  professor: Professor = new Professor();
  c: Professor = new Professor();

  @Output() onClickDetails: EventEmitter<Professor> = new EventEmitter<Professor>();
  @Output() onClickAddServico: EventEmitter<Professor> = new EventEmitter<Professor>();


  constructor(private http: HttpClient) { }

  public listarProfessores(): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.url}cliente`);
  }

  public criarProfessor(professor: Professor): void {
    this.http.post(`${this.url}cliente`, professor).subscribe(resultado => console.log(resultado));
  }

  public alterarProfessor(): void {
    this.http.put(`${this.url}cliente`, this.professor).subscribe(resultado => console.log(resultado));
  }

  public deletarProfessor(id: number | undefined): void {
    this.http.delete(`${this.url}cliente/${id}`).subscribe(resultado => console.log(resultado));
  }

  public receberIdProfessor(id: number | undefined) {
    this.professor.id = id;
  }

  public getProfessorById(id: number | undefined): Observable<Professor>{
    let obs = this.http.get<Professor>(`${this.url}cliente/pesquisa/${id}`);

    obs.subscribe(
      (professor: Professor) => {
        this.onClickDetails.emit(professor)
      }
    )

    return obs;
  }

  public enviarProfessor(professorId: number | undefined){
    let obs = this.http.get<Professor>(`${this.url}cliente/pesquisa/${professorId}`);

    obs.subscribe(
      (professor: Professor) => {
        this.onClickAddServico.emit(professor);
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

    let obs = this.http.post<Professor[]>(`${this.url}cliente/pesquisa`, this.c)
    obs.subscribe(res => {
        console.log(res)
      })
    return obs;
  }
}
