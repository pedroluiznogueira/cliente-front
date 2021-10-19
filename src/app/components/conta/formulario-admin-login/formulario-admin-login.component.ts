import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { ContaAdminService } from '../comp/conta-admin.service';

@Component({
  selector: 'app-formulario-admin-login',
  templateUrl: './formulario-admin-login.component.html',
  styleUrls: ['./formulario-admin-login.component.css']
})
export class FormularioAdminLoginComponent implements OnInit {

  emailAdmin?: string;
  senhaAdmin?: string;

  admin?: Usuario;

  loginNaoRealizado: boolean = false;
  loginRealizado: boolean = false;

  constructor(
    private contaAdminService: ContaAdminService,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
  }

  public envioFormulario(): void {
    console.log("login enviado")
    this.admin = new Usuario();

    this.admin.email = this.emailAdmin;
    this.admin.senha = this.senhaAdmin;
    this.admin.tipo = "admin";

    this.contaAdminService.loginAdmin(this.admin).subscribe(
      (data: Usuario) => {
        window.sessionStorage.setItem("token", data.token!)
        this.router.navigate(['/'])
    });
  }

  public validarCampos(): void {
    let inputUsuario: HTMLInputElement = <HTMLInputElement>document.getElementById("usuarioAdmin");
    let inputSenha: HTMLInputElement = <HTMLInputElement>document.getElementById("senhaAdmin");

    if (this.emailAdmin == null || this.senhaAdmin == null || this.emailAdmin == "" || this.senhaAdmin == "") {
      inputUsuario.classList.add("campos-vazios");
      inputSenha.classList.add("campos-vazios");

      this.emailAdmin = "";
      this.senhaAdmin = "";

    } else {
      this.envioFormulario();
      inputUsuario.classList.remove("campos-vazios");
      inputSenha.classList.remove("campos-vazios");

      this.emailAdmin = "";
      this.senhaAdmin = "";
      
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
