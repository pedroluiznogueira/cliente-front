import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-aprendizado',
  templateUrl: './aprendizado.component.html',
  styleUrls: ['./aprendizado.component.css']
})
export class AprendizadoComponent implements OnInit {

  cursos?: Curso[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cursos = JSON.parse(sessionStorage.getItem('cursos')!);
  }

}
