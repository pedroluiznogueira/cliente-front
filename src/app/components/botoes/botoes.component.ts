import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CadastroService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.css']
})
export class BotoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
