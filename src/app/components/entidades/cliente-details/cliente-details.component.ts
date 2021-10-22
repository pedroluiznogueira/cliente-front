import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {

  professor: Professor = new Professor();

  servicosCliente: Array<Curso> = new Array();

  constructor(
    private clienteService:ClienteService, 
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.clienteService.onClickDetails.subscribe(
      (professor: Cliente) => {
        this.professor = professor;
      }
    )
  }

  public enviarProfessor(professorId: number | undefined){
    this.clienteService.enviarCliente(professorId)
  }
  
  public listarCursosProfessor(professor: Professor): void {
    this.cursosService.listarServicosCliente(professor).subscribe(
      servicos => this.servicosCliente = servicos);
  }

  public deletarServico(id: number | undefined): void {
    this.cursosService.deletarCurso(id);
    this.ngOnInit();
  }

  public enviarIdCurso(id: number | undefined): void {
    this.cursosService.receberIdCurso(id);
  }
}
