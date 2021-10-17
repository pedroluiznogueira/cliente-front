import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-formulario-admin',
  templateUrl: './formulario-admin.component.html',
  styleUrls: ['./formulario-admin.component.css']
})
export class FormularioAdminComponent implements OnInit {

  nomeAdmin?: string;
  senhaAdmin?: string;
  senhaConfAdmin?: string;
  senhaInvalida?: boolean = false;
  novoAdmin?: Usuario;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public envioFormulario(): void {

    this.novoAdmin = new Usuario();

    this.novoAdmin.nomeUsuario = this.nomeAdmin;
    this.novoAdmin.senha = this.senhaAdmin;
    
    this.adminService.cadastroUsuario(this.novoAdmin);
  }

  public validarSenha(senhaAdmin: string | undefined, senhaConfAdmin: string | undefined): void {
    if (senhaAdmin != senhaConfAdmin || senhaAdmin == null || senhaConfAdmin == null) {
      this.mostrarErro();
    } else {
      this.envioFormulario();
      this.ngOnInit();
    }
  }

  public validarCampos(): void {
    let inputUsuario: HTMLInputElement = <HTMLInputElement>document.getElementById("usuario");
    let inputSenha: HTMLInputElement = <HTMLInputElement>document.getElementById("senha");
    let inputSenhaConfirmada: HTMLInputElement = <HTMLInputElement>document.getElementById("senha-confirmada");

    if (this.nomeAdmin == null || this.senhaAdmin == null || this.nomeAdmin == "" || this.senhaAdmin == "") {
      inputUsuario.classList.add("campos-vazios");
      inputSenha.classList.add("campos-vazios");

      this.nomeAdmin = "";
      this.senhaAdmin = "";

    } else {
      this.envioFormulario();
      inputUsuario.classList.remove("campos-vazios");
      inputSenha.classList.remove("campos-vazios");

      this.nomeAdmin = "";
      this.senhaAdmin = "";
      
    }
  }

  public mostrarErro(): void {
    this.senhaInvalida = true;
  }

  public esconderErro(): void {
    this.senhaInvalida =  false;
  }
}
