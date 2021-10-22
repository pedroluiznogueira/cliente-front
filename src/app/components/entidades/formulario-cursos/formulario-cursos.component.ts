import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-formulario-cursos',
  templateUrl: './formulario-cursos.component.html',
  styleUrls: ['./formulario-cursos.component.css']
})
export class FormularioCursosComponent implements OnInit {

  public titulo?: string;
  public descricao?: string;
  public valor?: number | undefined;

  professor: Professor = new Professor();
  public curso?: Curso = new Curso();

  constructor(
    private cursosService: CursosService, 
    private professoresService: ProfessoresService
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
    this.curso!.cliente = this.professor;

    this.cursosService.criarCurso(this.curso!);

    this.titulo = "";
    this.descricao = "";
    this.valor = 0;
    
  }

}
