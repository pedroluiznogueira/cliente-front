import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-adicionando-modulos',
  templateUrl: './adicionando-modulos.component.html',
  styleUrls: ['./adicionando-modulos.component.css']
})
export class AdicionandoModulosComponent implements OnInit {

  curso: Curso = new Curso();

  constructor(
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.cursosService.emitirCursoPlataforma
      .subscribe(
        (curso: Curso) => {
          this.curso = curso;
        }
      );
  }

}
