import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-formulario-update',
  templateUrl: './formulario-update.component.html',
  styleUrls: ['./formulario-update.component.css']
})
export class FormularioUpdateComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.receberCliente();
    console.log(this.cliente)
  }

  public envioFormulario(){
    console.log("teste")
  }

  public receberCliente() {
    this.cadastroService.enviarCliente.subscribe(resultado => {
      this.cliente.id = resultado.id;
      this.cliente.nome = resultado.nome;
      this.cliente.sobrenome = resultado.sobrenome;
      this.cliente.email = resultado.email;
    });
  }

}
