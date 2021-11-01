import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-professor-formulario',
  templateUrl: './professor-formulario.component.html',
  styleUrls: ['./professor-formulario.component.css']
})
export class ProfessorFormularioComponent implements OnInit {

  public nome?: string;
  public sobrenome?: string;
  public email?: string;
  public sobre?: string;
  public resumo?: string;
  public professor?: Professor;

  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {
  }

  public envioFormulario(): void {
    this.professor =  new Professor();
    this.professor.nome = this.nome;
    this.professor.sobrenome = this.sobrenome;
    this.professor.email = this.email;

    this.professorService.criarProfessor(this.professor);
    this.nome = "";
    this.sobrenome = "";
    this.email = "";
  }

}
