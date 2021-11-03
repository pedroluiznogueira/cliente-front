import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Modulocurso } from 'src/app/models/modulocurso';
import { CursosService } from 'src/app/services/cursos.service';
import { UploadFileService } from 'src/app/services/uploadfile.service';

@Component({
  selector: 'app-conteudo-curso',
  templateUrl: './conteudo-curso.component.html',
  styleUrls: ['./conteudo-curso.component.css']
})
export class ConteudoCursoComponent implements OnInit {

  titulo?: string;
  conteudoPrincipal?: string;
  videoId?: string;

  moduloCurso?: Modulocurso = new Modulocurso();
  curso?: Curso = new Curso();

  arquivosSelecionados?: FileList;
  arquivoUpload?: File;

  constructor(
    private cursosService: CursosService,
    private uploadService: UploadFileService
  ) { }

  ngOnInit(): void {
    this.cursosService.emitirCurso
      .subscribe(
        (curso: Curso) => {
          console.log("CHEGOU")
          console.log(curso)
          this.curso = curso;
        }
      );
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

    this.moduloCurso!.titulo = this.titulo;
    this.moduloCurso!.conteudoPrincipal = this.conteudoPrincipal;
    this.moduloCurso!.imagem = this.arquivoUpload!.name;
    this.moduloCurso!.curso = this.curso;
    this.moduloCurso!.videoId = this.videoId;

    console.log("AQUI TB")
    console.log(this.moduloCurso);

    this.cursosService.criarModuloCurso(this.moduloCurso!);
  }

}
