import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.css']
})
export class BotoesComponent implements OnInit {

  @Output() onConsultarClick: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  listarClientes(): void {
    this.onConsultarClick.emit();
  }

}
