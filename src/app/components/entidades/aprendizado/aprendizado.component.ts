import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Usuario } from 'src/app/models/usuario.model';
import { PagamentoService } from 'src/app/services/pagamento.service';

@Component({
  selector: 'app-aprendizado',
  templateUrl: './aprendizado.component.html',
  styleUrls: ['./aprendizado.component.css']
})
export class AprendizadoComponent implements OnInit {

  urlImagem?: string = "https://udeyou.s3.sa-east-1.amazonaws.com/"

  cursosPedidos: Curso[] = [];

  constructor(
    private pagamentoService: PagamentoService
  ) { }

  ngOnInit(): void {

    this.pagamentoService.getCursosComprados()
      .subscribe(
        (usuario: Usuario) => {
          for (let pedido of usuario.pedidos!) {
            for (let curso of pedido.cursos!) {
              this.cursosPedidos!.push(curso!);
            }
          }
          console.log(this.cursosPedidos)
        }        
      );
  }

}
