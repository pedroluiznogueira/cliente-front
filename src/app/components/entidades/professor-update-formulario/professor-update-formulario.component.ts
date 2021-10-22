import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-professor-update-formulario',
  templateUrl: './professor-update-formulario.component.html',
  styleUrls: ['./professor-update-formulario.component.css']
})
export class ProfessorUpdateFormularioComponent implements OnInit {

  public nome?: string;
  public sobrenome?: string;
  public email?: string;
  public professor?: Professor;

  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {
  }

  public envioFormulario(): void {
    this.professor =  new Professor();
    this.professor.nome = this.nome;
    this.professor.sobrenome = this.sobrenome;
    this.professor.email = this.email;

    this.professorService.novoProfessor(this.professor);
    this.nome = "";
    this.sobrenome = "";
    this.email = "";
  }

}
