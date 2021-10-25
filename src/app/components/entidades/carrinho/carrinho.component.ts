import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  cursos: Curso[] = [];

  constructor() { }

  ngOnInit(): void {
    this.mostrarCursos();
  }

  public mostrarCursos(): void {
   this.cursos = JSON.parse(sessionStorage.getItem("cursos")!);
   console.log(this.cursos);
  }


}
