import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Professor } from 'src/app/models/professor';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso-details',
  templateUrl: './curso-details.component.html',
  styleUrls: ['./curso-details.component.css']
})
export class CursoDetailsComponent implements OnInit {

  curso: Curso = new Curso();
  cursos: Curso[] = [];

  professor?: Professor = new Professor();

  constructor(
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.cursosService.onClickCursoDetails.subscribe(
      (curso: Curso) => {
        this.curso = curso;
        this.professor = curso.professor;
      }
    );
  }

  public sessionCurso(curso: Curso) {
    let cursosGet: Curso[] = JSON.parse(sessionStorage.getItem("cursos")!) 
    
    for (let c of cursosGet) {
      if (c.titulo == curso.titulo) {
        return
      }
    }
    cursosGet.push(curso);
    window.sessionStorage.setItem("cursos", JSON.stringify(cursosGet));
  }



}
