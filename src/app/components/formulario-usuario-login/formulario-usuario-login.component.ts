import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formulario-usuario-login',
  templateUrl: './formulario-usuario-login.component.html',
  styleUrls: ['./formulario-usuario-login.component.css']
})
export class FormularioUsuarioLoginComponent implements OnInit {

  nomeUsuario?: string;
  senha?: string;
  usuario?: Usuario;
  loginNaoRealizado: boolean = false;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.loginValidado.subscribe(() => {
      this.mostrarErro()
    }
  );
  }

  public envioFormulario(): void {
    this.usuario = new Usuario();

    this.usuario.nomeUsuario = this.nomeUsuario;
    this.usuario.senha = this.senha;
    this.usuario.estaLogado = this.usuario.estaLogado;

    this.usuarioService.loginUsuario(this.usuario);
  }

  public validarCampos(): void {
    let inputUsuario: HTMLInputElement = <HTMLInputElement>document.getElementById("usuario");
    let inputSenha: HTMLInputElement = <HTMLInputElement>document.getElementById("senha");

    if (this.nomeUsuario == null || this.senha == null || this.nomeUsuario == "" || this.senha == "") {
      inputUsuario.classList.add("campos-vazios");
      inputSenha.classList.add("campos-vazios");

      this.nomeUsuario = "";
      this.senha = "";

    } else {
      this.envioFormulario();
      inputUsuario.classList.remove("campos-vazios");
      inputSenha.classList.remove("campos-vazios");

      this.nomeUsuario = "";
      this.senha = "";
      
    }
  }

  public mostrarErro(): void {
    this.loginNaoRealizado = !this.loginNaoRealizado;
  }

  public esconderErro(): void {
    this.loginNaoRealizado = !this.loginNaoRealizado;
  }

}
