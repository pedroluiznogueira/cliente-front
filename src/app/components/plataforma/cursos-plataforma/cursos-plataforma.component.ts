import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Professor } from 'src/app/models/professor';
import { CursosService } from 'src/app/services/cursos.service';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-cursos-plataforma',
  templateUrl: './cursos-plataforma.component.html',
  styleUrls: ['./cursos-plataforma.component.css']
})
export class CursosPlataformaComponent implements OnInit {

  urlImagem?: string = "https://udeyou.s3.sa-east-1.amazonaws.com/"

  professor?:Professor;

  cursos: Curso [] = [];

  constructor(
    private professorService: ProfessorService,
    private cursoService: CursosService
  ) { }

  ngOnInit(): void {
    let professor = JSON.parse(sessionStorage.getItem("plataforma")!);

    this.cursoService.listarCursosByProfessor(professor).subscribe((cursos) => {
      this.cursos = cursos;
    })

    this.professor = professor

  }

  public deletarCurso(curso:Curso): void {
    this.cursos.splice(this.cursos.indexOf(curso), 1);

    this.cursoService.deletarCurso(curso.id)
  }

  public editarCurso(curso:Curso): void {
    this.cursoService.emitirCursoUpdate(curso);
  }

  public emitirCurso(curso: Curso) {
    
  }

}
