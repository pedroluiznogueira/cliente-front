import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Professor } from 'src/app/models/professor';
import { CursosService } from 'src/app/services/cursos.service';
import { ProfessorService } from 'src/app/services/professor.service';
import { UploadFileService } from 'src/app/services/uploadfile.service';

@Component({
  selector: 'app-formulario-cursos',
  templateUrl: './formulario-cursos.component.html',
  styleUrls: ['./formulario-cursos.component.css']
})
export class FormularioCursosComponent implements OnInit {

  titulo?: string;
  resumo?: string;
  descricao?: string;
  requisitos?: string;
  valor?: number | undefined;

  professor: Professor = new Professor();
  curso?: Curso = new Curso();

  arquivosSelecionados?: FileList;
  arquivoUpload?: File;

  constructor(
    private cursosService: CursosService, 
    private professoresService: ProfessorService,
    private uploadService: UploadFileService
  ) { }

  ngOnInit(): void {
    this.professor = JSON.parse(sessionStorage.getItem("plataforma")!);
  }

    // persistência da imagem de perfil do usuário

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
    this.curso!.professor = this.professor;
    this.curso!.imagem = this.arquivoUpload!.name;
    
    this.cursosService.criarCurso(this.curso!);

    this.titulo = "";
    this.descricao = "";
    this.valor = 0;
    
  }

}
