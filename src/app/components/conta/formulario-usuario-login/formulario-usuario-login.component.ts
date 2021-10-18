import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
import { ContaUsuarioService } from '../comp/conta-usuario.service';

@Component({
  selector: 'app-formulario-usuario-login',
  templateUrl: './formulario-usuario-login.component.html',
  styleUrls: ['./formulario-usuario-login.component.css']
})
export class FormularioUsuarioLoginComponent implements OnInit {

  nomeUsuario?: string;
  senha?: string;
  email?: string;

  usuario?: Usuario;
  
  loginNaoRealizado: boolean = false;
  loginRealizado: boolean = false;

  router: Router;

  constructor(private contaUsuarioService: ContaUsuarioService, router: Router) { 
    this.router = router
  }

  ngOnInit(): void {
  }

  public envioFormulario(): void {
    this.usuario = new Usuario();

    this.usuario.nome = this.nomeUsuario;
    this.usuario.senha = this.senha;

    this.contaUsuarioService.loginUsuario(this.usuario);
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
      this.mostrarSucesso();
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

  public mostrarSucesso(): void {
    this.loginRealizado = !this.loginRealizado;
    this.router.navigate(['/']);

  }

  public esconderSucesso(): void {
    this.loginRealizado = !this.loginRealizado;
  }

}
