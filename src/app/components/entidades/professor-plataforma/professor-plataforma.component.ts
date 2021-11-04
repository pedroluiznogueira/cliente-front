import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Professor } from 'src/app/models/professor';
import { CursosService } from 'src/app/services/cursos.service';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-professor-plataforma',
  templateUrl: './professor-plataforma.component.html',
  styleUrls: ['./professor-plataforma.component.css']
})
export class ProfessorPlataformaComponent implements OnInit {

  professor?:Professor;

  cursos: Curso [] = [];

  urlImagem?: string = "https://udeyou.s3.sa-east-1.amazonaws.com/"

  constructor(
    private professorService: ProfessorService
    ) { }

  ngOnInit(): void {
    this.professorService.emitirCursoByProfessor.subscribe((cursos) => {
      this.cursos = cursos
    })
  }

}
