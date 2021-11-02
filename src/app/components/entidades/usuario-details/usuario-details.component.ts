import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario-details',
  templateUrl: './usuario-details.component.html',
  styleUrls: ['./usuario-details.component.css']
})
export class UsuarioDetailsComponent implements OnInit {

  urlImagem?: string = "https://udeyou.s3.sa-east-1.amazonaws.com/"
  usuario: Usuario = new Usuario();

  constructor() { }

  ngOnInit(): void {
    this.usuario = JSON.parse(sessionStorage.getItem("usuarioLogado")!);
  }
}
