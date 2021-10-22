import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Professor } from 'src/app/models/professor';
import { CursosService } from 'src/app/services/cursos.service';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-formulario-cursos',
  templateUrl: './formulario-cursos.component.html',
  styleUrls: ['./formulario-cursos.component.css']
})
export class FormularioCursosComponent implements OnInit {

   titulo?: string;
  public descricao?: string;
  public valor?: number | undefined;

  professor: Professor = new Professor();
  public curso?: Curso = new Curso();

  constructor(
    private cursosService: CursosService, 
    private professoresService: ProfessorService
  ) { }

  ngOnInit(): void {
    this.professoresService.onClickAddCurso.subscribe(
      (professor: Professor) => {
        this.professor = professor;
    })
  }

  public envioFormulario(): void {

    this.curso!.titulo = this.titulo;
    this.curso!.descricao = this.descricao;
    this.curso!.valor = this.valor;
    this.curso!.professor = this.professor;

    this.cursosService.criarCurso(this.curso!);

    this.titulo = "";
    this.descricao = "";
    this.valor = 0;
    
  }

}
