import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-formulario-admin-login',
  templateUrl: './formulario-admin-login.component.html',
  styleUrls: ['./formulario-admin-login.component.css']
})
export class FormularioAdminLoginComponent implements OnInit {

  nomeUsuarioAdmin?: string;
  senhaAdmin?: string;

  admin?: Usuario;

  loginNaoRealizado: boolean = false;
  loginRealizado: boolean = false;

  router: Router;

  constructor(private adminService: AdminService,router: Router) { 
    this.router = router;
  }

  ngOnInit(): void {
    this.adminService.loginAdminValidado.subscribe((data: string) => {
      if (data == "erro") {
        console.log(data)
        this.mostrarErro()
      } else {
        console.log(data)
        this.mostrarSucesso()
      }
    }
  );
  }

  public envioFormulario(): void {
    console.log("login enviado")
    this.admin = new Usuario();

    this.admin.nomeUsuario = this.nomeUsuarioAdmin;
    this.admin.senha = this.senhaAdmin;
    this.admin.tipoConta = "admin";

    this.adminService.loginAdmin(this.admin);
  }

  public validarCampos(): void {
    let inputUsuario: HTMLInputElement = <HTMLInputElement>document.getElementById("usuarioAdmin");
    let inputSenha: HTMLInputElement = <HTMLInputElement>document.getElementById("senhaAdmin");

    if (this.nomeUsuarioAdmin == null || this.senhaAdmin == null || this.nomeUsuarioAdmin == "" || this.senhaAdmin == "") {
      inputUsuario.classList.add("campos-vazios");
      inputSenha.classList.add("campos-vazios");

      this.nomeUsuarioAdmin = "";
      this.senhaAdmin = "";

    } else {
      this.envioFormulario();
      inputUsuario.classList.remove("campos-vazios");
      inputSenha.classList.remove("campos-vazios");

      this.nomeUsuarioAdmin = "";
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
    this.router.navigate(['/home']);

  }

  public esconderSucesso(): void {
    this.loginRealizado = !this.loginRealizado;
  }

}
