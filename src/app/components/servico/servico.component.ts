import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  nomes: string[] = ["djks", "djks", "djks", "djks", "djks", "djks", "djks"];

  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
