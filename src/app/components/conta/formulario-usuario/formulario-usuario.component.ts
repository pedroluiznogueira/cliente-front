import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UploadFileService } from 'src/app/services/uploadfile.service';
import { ContaUsuarioService } from '../comp/conta-usuario.service';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  novoNomeUsuario?: string;
  senha?: string;
  senhaConfirmada?: string;
  email?: string;
  sobrenome?: string;
  manchete?: string;
  biografia?: string;

  senhaInvalida?: boolean = false;

  novoUsuario?: Usuario;

  arquivosSelecionados?: FileList;
  arquivoUpload?: File;

  constructor(
    private contaUsuarioService: ContaUsuarioService,
    private uploadService: UploadFileService,
    private router: Router
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

    this.novoUsuario = new Usuario();

    this.novoUsuario.nome = this.novoNomeUsuario;
    this.novoUsuario.email = this.email;
    this.novoUsuario.senha = this.senha;
    this.novoUsuario.imagem = this.arquivoUpload!.name;
    this.novoUsuario.sobrenome = this.sobrenome;
    this.novoUsuario.manchete = this.manchete;
    this.novoUsuario.biografia = this.biografia;

    console.log(this.novoUsuario);

    this.contaUsuarioService.cadastroUsuario(this.novoUsuario);
  }

  public validarCampos(senha: string | undefined, senhaConfirmada: string | undefined): void {
    let inputUsuario: HTMLInputElement = <HTMLInputElement>document.getElementById("usuario");
    let inputSenha: HTMLInputElement = <HTMLInputElement>document.getElementById("senha");
    let inputSenhaConfirmada: HTMLInputElement = <HTMLInputElement>document.getElementById("senhaC");

    if (this.novoNomeUsuario == null || this.email == null || this.senha == null || this.novoNomeUsuario == "" ||  this.email == "" || this.senha == "") {
      inputUsuario.classList.add("campos-vazios");
      inputSenha.classList.add("campos-vazios");

      this.novoNomeUsuario = "";
      this.email = "";
      this.senha = "";
      this.senhaConfirmada = "";

    } else {
      this.validarSenha(senha, senhaConfirmada);
      inputUsuario.classList.remove("campos-vazios");
      inputSenha.classList.remove("campos-vazios");

      this.novoNomeUsuario = "";
      this.email = "";
      this.senha = "";
      this.senhaConfirmada = "";
      
    }
  }

  public validarSenha(senha: string | undefined, senhaConfirmada: string | undefined): void {
    if (senha != senhaConfirmada || senha == null || senhaConfirmada == null) {
      this.mostrarErro();
    } else {
      this.envioFormulario();
      this.router.navigate(['/login']);
      this.ngOnInit();
    }
  }

  public mostrarErro(): void {
    this.senhaInvalida = true;
  }

  public esconderErro(): void {
    this.senhaInvalida =  false;
  }
}
