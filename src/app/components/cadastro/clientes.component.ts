import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './clientes.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private cadastroService: CadastroService) { }
  
  ngOnInit(): void {
  }
}
