import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ContaAdminService {

  @Output() loginAdminValidado: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient) { }

  public loginAdmin(admin: Usuario): Observable<Usuario> {
    let res: Observable<Usuario> = this.http.post<Usuario>("https://consultoria-api.herokuapp.com/login", admin);
    return res;
  }

  public cadastroAdmin(admin: Usuario): void {
    console.log(admin)
    this.http.post("https://consultoria-api.herokuapp.com/cadastro", admin).subscribe(resultado => console.log(resultado))
  }
}
