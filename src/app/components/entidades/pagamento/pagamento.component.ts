import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { Curso } from 'src/app/models/curso';
import { PagamentoService } from 'src/app/services/pagamento.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  cursos: Curso[] = [];
  valorTotal?: number;

  constructor(
    private pagamentoService: PagamentoService
  ) {
   }

  ngOnInit(): void {
    this.mostrarCursosCarrinho();
    this.valorTotal = this.calcularTotal();
    this.pagamentoService.receberValorTotal(this.valorTotal)
    render(
      { 
        id: "#myPaypalButtons",
        currency: "USD",
        value: `${this.valorTotal}`, 
        onApprove: (detais) => {
          alert("Transação foi um sucesso")
          this.pagamentoService.cursosComprados(this.cursos!);
        }
      }
    );    
  }

  public mostrarCursosCarrinho(): void {
    this.cursos = JSON.parse(sessionStorage.getItem("cursos")!);
  }

  public calcularTotal(): number {
    let valor = 0;

    for (let curso of this.cursos) {
      valor += curso.valor!;
    }
    return valor;
  }

}