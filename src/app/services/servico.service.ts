import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Servico } from '../models/servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private url: string = "https://consultoria-api.herokuapp.com";

  servicoPesq: Servico = new Servico();

  servico: Servico = new Servico();

  constructor(private http: HttpClient) { }

  public listarServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>("this.url");
  }

  public criarServico(servico: Servico): void {
    this.http.post("this.url", servico).subscribe(resultado => console.log(resultado));
  }

  public deletarServico(id: number | undefined): void {
    this.http.delete(`${this.url}/servico/${id}`).subscribe(resultado => console.log(resultado));
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
    this.http.put("this.url", this.servico).subscribe(resultado => console.log(resultado));
  }

  // pesquisar servicos
  public pesquisarServico(term: string): Observable<Servico[]> {
    if (!term.trim()) {
      return of([])
    }

    this.servicoPesq.titulo = term;

    let obs =  this.http.post<Servico[]>("this.url", this.servicoPesq);

    obs.subscribe(
      (res) => {
        console.log(res)
      }                  
    )

    return obs;
  }

}
