import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Servico } from 'src/app/models/servico.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {

  cliente: Cliente = new Cliente();

  servicosCliente: Array<Servico> = new Array();

  constructor(private clienteService:ClienteService, private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.clienteService.onClickDetails.subscribe(
      (cliente: Cliente) => {
        this.cliente = cliente;
      }
    )
  }

  public enviarCLiente(cliente: Cliente){
    this.clienteService.enviarCliente(cliente)
  }
  
  public listarServicosCliente(cliente: Cliente): void {
    this.servicoService.listarServicosCliente(cliente).subscribe(servicos => this.servicosCliente = servicos);
  }

}
