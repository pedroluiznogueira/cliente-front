import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nome?: string;
  sobrenome?: string;
  email?: string;

  constructor() { }

  ngOnInit(): void {
  }

  public envioFormulario(): void {
    console.log(this.nome)
  }

}
