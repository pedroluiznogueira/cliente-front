import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clienteService.onClickDetails.subscribe(
      (cliente: Cliente) => {
        this.cliente = cliente;
      }
    )
  }



}
