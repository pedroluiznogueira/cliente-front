import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  public cadastrarAdmin(admin: Usuario): void {
    console.log("cadastrando admin")
  }
}
