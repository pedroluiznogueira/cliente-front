import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';
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

  professor?: Professor;

  isProfessor:boolean = false

  constructor(
    private professorService: ProfessorService
    ) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(sessionStorage.getItem("usuarioLogado")!);

    this.professorService.getProfessorByUsuario();

    this.professorService.emitirProfessorByUsuario.subscribe((professor) => {
      if(professor == null){
        this.isProfessor = false
      } else {
        this.isProfessor = true;
      }

      this.professor = professor;
    })
  }

  public enviarProfessor(): void{
    this.professorService.enviarProfessorByDetails(this.professor!)
  }
}
