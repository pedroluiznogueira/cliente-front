import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-admin',
  templateUrl: './formulario-admin.component.html',
  styleUrls: ['./formulario-admin.component.css']
})
export class FormularioAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public voltar(): void {
    this.router.navigate(['/'])
  }

  public loginUsuario(): void {
    this.router.navigate(['/cadastro'])
  }
}
