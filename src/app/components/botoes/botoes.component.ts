import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.css']
})
export class BotoesComponent implements OnInit {

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  listarClientes(): void {
    this.cadastroService.emitir();
  }

}
