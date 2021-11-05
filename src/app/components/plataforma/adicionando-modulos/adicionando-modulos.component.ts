import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-adicionando-modulos',
  templateUrl: './adicionando-modulos.component.html',
  styleUrls: ['./adicionando-modulos.component.css']
})
export class AdicionandoModulosComponent implements OnInit {

  curso: Curso = new Curso();

  constructor() { }

  ngOnInit(): void {
  }

}
