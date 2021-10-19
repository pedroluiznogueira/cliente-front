import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from '../models/servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  servico: Servico = new Servico();

  constructor(private http: HttpClient) { }

  public listarServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>("https://consultoria-api.herokuapp.com/servico");
  }

  public criarServico(servico: Servico): void {
    this.http.post("https://consultoria-api.herokuapp.com/servico", servico).subscribe(resultado => console.log(resultado));
  }

  public deletarServico(id: number | undefined): void {
    this.http.delete(`https://consultoria-api.herokuapp.com/servico/${id}`).subscribe(resultado => console.log(resultado));
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
    this.http.put("https://consultoria-api.herokuapp.com/servico", this.servico).subscribe(resultado => console.log(resultado));
  }
}
