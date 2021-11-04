import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { ProfessorService } from 'src/app/services/professor.service';
import { ContaUsuarioService } from '../../conta/comp/conta-usuario.service';

@Component({
  selector: 'app-usuario-details',
  templateUrl: './usuario-details.component.html',
  styleUrls: ['./usuario-details.component.css']
})
export class UsuarioDetailsComponent implements OnInit {

  urlImagem?: string = "https://udeyou.s3.sa-east-1.amazonaws.com/"

  usuario: Usuario = new Usuario();

  isProfessor:boolean = true

  constructor(
    private usuarioService: ContaUsuarioService,
    private professorService: ProfessorService
    ) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(sessionStorage.getItem("usuarioLogado")!);
    this.usuarioService.getUsuarioByEmail(this.usuario).subscribe(usuario => {this.usuario.id = usuario.id})

    if(this.professorService.getProfessorByUsuario(this.usuario) == null){
      this.isProfessor = true
    } else {
      this.isProfessor = false;
    }
    
  }
}
