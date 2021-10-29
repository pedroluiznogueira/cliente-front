import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  pesquisando: boolean = true;

  cursosFiltrados$!: Observable<Curso[]>
  private pesquisarTerms = new Subject<string>();

  cursos: Curso[] = [];
  valorTotal?: number;

  public pesquisar(term: string): void {
    this.pesquisando = false;
    this.pesquisarTerms.next(term);
  }

  constructor(
    private cursosService: CursosService
  ) { }


  ngOnInit(): void {
    this.mostrarCursos();

    this.cursosFiltrados$ = this.pesquisarTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.cursosService.pesquisarCursos(term)),
    );

    this.valorTotal = this.calcularTotal();
  }

  public mostrarCursos(): void {
   this.cursos = JSON.parse(sessionStorage.getItem("cursos")!);
   console.log(this.cursos);
  }

  public removerCurso(curso: Curso): void {
    this.cursos.splice(this.cursos.indexOf(curso), 1);
    window.sessionStorage.setItem("cursos", JSON.stringify(this.cursos));
    this.valorTotal = this.calcularTotal();
  }

  public enviarIdCurso(id: number | undefined): void {
    this.cursosService.receberIdCurso(id);
  }

  public calcularTotal(): number {
    let valor = 0;

    for (let curso of this.cursos) {
      valor += curso.valor!;
    }
    return valor;
  }
}
