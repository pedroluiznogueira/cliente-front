import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Curso } from 'src/app/models/curso';
import { Usuario } from 'src/app/models/usuario.model';
import { CursosService } from 'src/app/services/cursos.service';
import { PagamentoService } from 'src/app/services/pagamento.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  urlImagem?: string = "https://udeyou.s3.sa-east-1.amazonaws.com/"

  pesquisando: boolean = true;

  cursosFiltrados$!: Observable<Curso[]>
  private pesquisarTerms = new Subject<string>();

  cursos: Curso[] = [];
  valorTotal?: number;
  vezes: number = 0;

  public pesquisar(term: string): void {
    this.pesquisando = false;
    this.pesquisarTerms.next(term);
  }

  constructor(
    private cursosService: CursosService,
    private pagamentoService: PagamentoService,
    private router: Router
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

    if (this.cursos == null) return 0;

    for (let curso of this.cursos) {
      valor += curso.valor!;
    }
    return valor;
  }

  public verificarCursosComprados(): void {

    this.pagamentoService.getCursosComprados()
    .subscribe(
      (usuario: Usuario) => {
        if (usuario.pedidos!.length == 0) {
          this.router.navigate(['/pagamento'])
        }
        for (let pedido of usuario.pedidos!) {
          for (let curso of pedido.cursos!) {
            for (let cur of this.cursos) {
              if (curso.titulo === cur.titulo) {
                console.log("Curso já foi comprado")
                this.router.navigate(['/carrinho'])
              } else {
                this.router.navigate(['/pagamento'])
              }
            }
          }
        }
      }        
    );
  }
}
