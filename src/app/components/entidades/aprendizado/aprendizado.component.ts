import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Usuario } from 'src/app/models/usuario.model';
import { CursosService } from 'src/app/services/cursos.service';
import { PagamentoService } from 'src/app/services/pagamento.service';

@Component({
  selector: 'app-aprendizado',
  templateUrl: './aprendizado.component.html',
  styleUrls: ['./aprendizado.component.css']
})
export class AprendizadoComponent implements OnInit {

  urlImagem?: string = "https://udeyou.s3.sa-east-1.amazonaws.com/"

  cursosPedidos: Curso[] = [];

  constructor(
    private pagamentoService: PagamentoService,
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {

    this.pagamentoService.emitirCursos
      .subscribe(
        (cursos) => {
          this.cursosPedidos = cursos;
        }
      );
  }

  public enviarCurso(curso: Curso) {
    this.cursosService.enviarCurso(curso);
  }

}
