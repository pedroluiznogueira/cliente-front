import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
    render(
      { 
        id: "#myPaypalButtons",
        currency: "USD",
        value: "100.0", 
        onApprove: (detais) => {
          alert("Transaction Sucessfull")
        }
      }
    );    
  }

}
