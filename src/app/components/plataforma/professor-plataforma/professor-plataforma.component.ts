import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';

@Component({
  selector: 'app-professor-plataforma',
  templateUrl: './professor-plataforma.component.html',
  styleUrls: ['./professor-plataforma.component.css']
})
export class ProfessorPlataformaComponent implements OnInit {

  professor: Professor = new Professor();

  urlImagem?: string = "https://udeyou.s3.sa-east-1.amazonaws.com/"

  constructor() { }

  ngOnInit(): void {
    this.professor = JSON.parse(sessionStorage.getItem("plataforma")!)
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
