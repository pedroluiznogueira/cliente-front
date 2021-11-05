import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { Professor } from 'src/app/models/professor';
import { CursosService } from 'src/app/services/cursos.service';
import { UploadFileService } from 'src/app/services/uploadfile.service';

@Component({
  selector: 'app-formulario-cursos-update',
  templateUrl: './formulario-cursos-update.component.html',
  styleUrls: ['./formulario-cursos-update.component.css']
})
export class FormularioCursosUpdateComponent implements OnInit {


  titulo?: string;
  resumo?: string;
  descricao?: string;
  requisitos?: string;
  valor?: number | undefined;

  curso: Curso = new Curso();

  arquivosSelecionados?: FileList;
  arquivoUpload?: File;

  constructor(
    private cursosService: CursosService,
    private uploadService: UploadFileService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cursosService.onEmitirCursoUpdate.subscribe((curso) => {

      this.curso = curso

      this.titulo = curso.titulo;
      this.resumo = curso.resumo;
      this.descricao = curso.descricao;
      this.requisitos = curso.requisitos;
      this.valor = curso.valor;
    })
  }

  public arquivoSelecionado(event: any): void {
    this.arquivosSelecionados = event.target.files;
  }

  public uploadArquivo(): void {
    this.arquivoUpload = this.arquivosSelecionados!.item(0)!;
    this.uploadService.pushFileToStorage(this.arquivoUpload!)
      .subscribe(
        event => {
          this.arquivosSelecionados = undefined;          
        }
      );
  }

  public envioFormulario(): void {
    this.curso!.titulo = this.titulo;
    this.curso!.resumo = this.resumo;
    this.curso!.descricao = this.descricao;
    this.curso!.requisitos = this.requisitos;
    this.curso!.valor = this.valor;
    
    if(this.arquivoUpload != null){
      this.curso!.imagem = this.arquivoUpload!.name;
    }

    this.cursosService.alterarCurso(this.curso!);
  }

}
