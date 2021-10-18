import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/models/usuario.model';
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

  senhaInvalida?: boolean = false;

  novoUsuario?: Usuario;

  constructor(
    private contaUsuarioService: ContaUsuarioService
  ) { }

  ngOnInit(): void {
  }

  public envioFormulario(): void {

    this.novoUsuario = new Usuario();

    this.novoUsuario.nomeUsuario = this.novoNomeUsuario;
    this.novoUsuario.email = this.email;
    this.novoUsuario.senha = this.senha;

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
