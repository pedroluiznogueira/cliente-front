import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  novoNomeUsuario?: string;
  senha?: string;
  senhaConfirmada?: string;
  novoUsuario?: Usuario;
  senhaInvalida?: boolean = false;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  public envioFormulario(): void {

    this.novoUsuario = new Usuario();

    this.novoUsuario.nomeUsuario = this.novoNomeUsuario;
    this.novoUsuario.senha = this.senha;

    this.usuarioService.criarNovoUsuario(this.novoUsuario);
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
