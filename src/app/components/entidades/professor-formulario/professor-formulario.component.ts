import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { UploadFileService } from 'src/app/services/uploadfile.service';

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

  arquivosSelecionados?: FileList;
  arquivoUpload?: File;

  constructor(
    private professorService: ProfessorService,
    private uploadService: UploadFileService
    ) { }

  ngOnInit(): void {
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
    this.professor =  new Professor();
    this.professor.nome = this.nome;
    this.professor.sobrenome = this.sobrenome;
    this.professor.email = this.email;
    this.professor.resumo = this.resumo;
    this.professor.sobre = this.sobre;
    this.professor.imagem = this.arquivoUpload!.name

    this.professorService.criarProfessor(this.professor);
    this.nome = "";
    this.sobrenome = "";
    this.email = "";
    this.resumo = "";
    this.sobre = "";
  }

}
