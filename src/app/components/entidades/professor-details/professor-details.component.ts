import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Professor } from 'src/app/models/professor';
import { CursosService } from 'src/app/services/cursos.service';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-professor-details',
  templateUrl: './professor-details.component.html',
  styleUrls: ['./professor-details.component.css']
})
export class ProfessorDetailsComponent implements OnInit {

  imagem?: string = "assets\\img\\perfil-professores\\foto-perfil.jpg";

  professor: Professor = new Professor();

  cursosProfessor: Array<Curso> = new Array();

  constructor(
    private professorService: ProfessorService, 
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.professorService.onClickDetails.subscribe(
      (professor: Professor) => {
        this.professor = professor;
        this.listarCursosProfessor(professor);
        console.log(professor.imagem)
      }
    )
  }

  public enviarProfessor(professorId: number | undefined){
    this.professorService.enviarProfessor(professorId)
  }
  
  public listarCursosProfessor(professor: Professor): void {
    this.cursosService.listarCursosProfessor(professor).subscribe(
      cursos => this.cursosProfessor = cursos);
  }

  public deletarCurso(id: number | undefined): void {
    this.cursosService.deletarCurso(id);
    this.ngOnInit();
  }

  public sessionCurso(curso: Curso) {
    window.sessionStorage.setItem("cursos", JSON.stringify(curso));
  }

  public enviarIdCurso(id: number | undefined): void {
    this.cursosService.receberIdCurso(id);
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }
}
