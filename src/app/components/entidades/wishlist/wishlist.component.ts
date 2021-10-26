import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Usuario } from 'src/app/models/usuario.model';
import { ContaUsuarioService } from '../../conta/comp/conta-usuario.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(
    private contaUsuarioService: ContaUsuarioService
  ) { }

  ngOnInit(): void {
    this.contaUsuarioService.cursosWish.subscribe(
      (data) => {
        this.cursos = data;
      }
    );
  }
}
