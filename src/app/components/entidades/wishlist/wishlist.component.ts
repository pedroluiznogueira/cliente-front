import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { ContaUsuarioService } from '../../conta/comp/conta-usuario.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(
    private contaUsuarioService: ContaUsuarioService
  ) { }

  ngOnInit(): void {
  }

  
}
