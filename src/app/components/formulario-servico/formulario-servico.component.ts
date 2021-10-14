import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-servico',
  templateUrl: './formulario-servico.component.html',
  styleUrls: ['./formulario-servico.component.css']
})
export class FormularioServicoComponent implements OnInit {

  titular?: string;
  descricao?: string;
  valor?: number;

  constructor() { }

  ngOnInit(): void {
  }


  public envioFormulario(): void {
    
  }

}
