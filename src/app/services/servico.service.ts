import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Servico } from '../models/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private url: string = "http://localhost:8080/";

  servicoPesq: Servico = new Servico();

  servico: Servico = new Servico();

  constructor(private http: HttpClient) { }

  public listarServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(`${this.url}servico`);
  }

  public criarServico(servico: Servico): void {
    this.http.post(`${this.url}servico`, servico).subscribe(resultado => console.log(resultado));
  }

  public deletarServico(id: number | undefined): void {
    this.http.delete(`${this.url}servico/${id}`).subscribe(resultado => console.log(resultado));
  }

  public receberIdServico(id: number | undefined): void {
    this.servico.id = id;
  }

  public novoServico(servico: Servico): void {
    this.servico.titulo = servico.titulo;
    this.servico.descricao = servico.descricao;
    this.servico.valor = servico.valor;

    this.alterarServico();
  }

  public alterarServico(): void {
    this.http.put(`${this.url}servico`, this.servico).subscribe(resultado => console.log(resultado));
  }

  // pesquisar servicos
  public pesquisarServicos(term: string): Observable<Servico[]> {
    if (!term.trim()) {
      return of([])
    }

    this.servicoPesq.titulo = term;

    let obs =  this.http.post<Servico[]>("http://localhost:8080/servico/pesquisa", this.servicoPesq);
    obs.subscribe(
      (res) => {
        console.log(res)
      }                  
    )
    return obs;
  }

  public listarServicosCliente(cliente: Cliente): Observable<Servico[]> {

    let obs =  this.http.post<Servico[]>(`http://localhost:8080/servico/find-by-cliente`, cliente);

    obs.subscribe(
      (servicos: Servico[]) => {
        console.log(servicos)
      }
    )

    return obs;
  }

}
