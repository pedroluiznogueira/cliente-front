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

  email?: string;
  senha?: string;

  usuario?: Usuario;
  
  loginNaoRealizado: boolean = false;
  loginRealizado: boolean = false;

  constructor(
    private contaUsuarioService: ContaUsuarioService,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
  }

  public envioFormulario(): void {
    this.usuario = new Usuario();

    this.usuario.email = this.email;
    this.usuario.senha = this.senha;

    this.contaUsuarioService.loginUsuario(this.usuario).subscribe((data: Usuario) => {
      window.sessionStorage.setItem("token", data.token!)
      this.router.navigate(['/'])
    }
    )
  }

  public validarCampos(): void {
    let inputUsuario: HTMLInputElement = <HTMLInputElement>document.getElementById("usuario");
    let inputSenha: HTMLInputElement = <HTMLInputElement>document.getElementById("senha");

    if (this.email == null || this.senha == null || this.email == "" || this.senha == "") {
      inputUsuario.classList.add("campos-vazios");
      inputSenha.classList.add("campos-vazios");

      this.email = "";
      this.senha = "";

    } else {
      this.envioFormulario();
      this.router.navigateByUrl("/");

      inputUsuario.classList.remove("campos-vazios");
      inputSenha.classList.remove("campos-vazios");

      this.email = "";
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

  }

  public esconderSucesso(): void {
    this.loginRealizado = !this.loginRealizado;
  }

}
