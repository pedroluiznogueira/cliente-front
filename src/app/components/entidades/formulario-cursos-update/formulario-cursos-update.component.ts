import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-formulario-cursos-update',
  templateUrl: './formulario-cursos-update.component.html',
  styleUrls: ['./formulario-cursos-update.component.css']
})
export class FormularioCursosUpdateComponent implements OnInit {


  novoTitulo?: string;
  novaDescricao?: string;
  novoValor?: number | undefined;

  curso?: Curso;

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
  }

  public envioFormulario(): void {

    this.novoCurso();

    this.novoTitulo = "";
    this.novaDescricao = "";
    this.novoValor = 0;
  }

  public novoCurso(): void {
    this.curso = new Curso();

    this.curso.titulo = this.novoTitulo;
    this.curso.descricao = this.novaDescricao;
    this.curso.valor = this.novoValor;

    console.log(this.curso.titulo);

    this.cursosService.novoCurso(this.curso)
  }


}
