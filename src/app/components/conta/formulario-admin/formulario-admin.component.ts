import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { ContaAdminService } from '../comp/conta-admin.service';

@Component({
  selector: 'app-formulario-admin',
  templateUrl: './formulario-admin.component.html',
  styleUrls: ['./formulario-admin.component.css']
})
export class FormularioAdminComponent implements OnInit {

  nomeAdmin?: string;
  senhaAdmin?: string;
  email?: string;
  senhaConfAdmin?: string;

  senhaInvalida?: boolean = false;

  novoAdmin?: Usuario;

  constructor(private contaAdminService: ContaAdminService, private router: Router) { }

  ngOnInit(): void {
  }

  public envioFormulario(): void {

    this.novoAdmin = new Usuario();

    this.novoAdmin.nome = this.nomeAdmin;
    this.novoAdmin.senha = this.senhaAdmin;
    this.novoAdmin.tipo = "admin";

    this.contaAdminService.cadastroAdmin(this.novoAdmin);
  }

  public validarCampos(senhaAdmin: string | undefined, senhaConfAdmin: string | undefined): void {
    let inputUsuario: HTMLInputElement = <HTMLInputElement>document.getElementById("usuarioAdminC");
    let inputSenha: HTMLInputElement = <HTMLInputElement>document.getElementById("senhaAdminC");
    let inputSenhaConfirmada: HTMLInputElement = <HTMLInputElement>document.getElementById("senhaAdminCC");

    if (this.nomeAdmin == null || this.senhaAdmin == null || this.nomeAdmin == "" || this.senhaAdmin == "") {
      inputUsuario.classList.add("campos-vazios");
      inputSenha.classList.add("campos-vazios");

      this.nomeAdmin = "";
      this.senhaAdmin = "";
      this.senhaConfAdmin = "";

    } else {
      this.validarSenha(senhaAdmin, senhaConfAdmin)
      inputUsuario.classList.remove("campos-vazios");
      inputSenha.classList.remove("campos-vazios");

      this.nomeAdmin = "";
      this.senhaAdmin = "";
      this.senhaConfAdmin == "";
      
    }
  }

  public validarSenha(senhaAdmin: string | undefined, senhaConfAdmin: string | undefined): void {
    if (senhaAdmin != senhaConfAdmin || senhaAdmin == null || senhaConfAdmin == null) {
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
