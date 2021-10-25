import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso-details',
  templateUrl: './curso-details.component.html',
  styleUrls: ['./curso-details.component.css']
})
export class CursoDetailsComponent implements OnInit {

  curso: Curso = new Curso();
  cursos: Curso[] = [];

  constructor(
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.cursosService.onClickCursoDetails.subscribe(
      (curso: Curso) => {
        this.curso = curso;
      }
    );
  }

  public sessionCurso(curso: Curso): void {
    this.cursos = JSON.parse(sessionStorage.getItem("cursos")!);
    if (this.cursos == null) {
      this.cursos = [];
      this.cursos.push(curso);
      window.sessionStorage.setItem("cursos", JSON.stringify(this.cursos));      
    } else {
      this.cursos.push(curso);
      window.sessionStorage.setItem("cursos", JSON.stringify(this.cursos));
    }
  }



}
