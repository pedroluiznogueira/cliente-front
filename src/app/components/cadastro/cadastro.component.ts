import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { CadastroService } from 'src/app/services/cadastro.service';
import { TabelaComponent } from '../tabela/tabela.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private cadastroService: CadastroService) { }
  
  ngOnInit(): void {
  }

  public consultar(): void {
    this.cadastroService.emitir();
  }
}
