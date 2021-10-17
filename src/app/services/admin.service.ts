import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  @Output() loginAdminValidado: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient) { }

  public loginAdmin(admin: Usuario): Observable<Response> {
    let res: Observable<Response> = this.http.post<Response>("http://localhost:8080/login", admin);

    res.subscribe(
      (data: Response) => {
        if (data.status == "erro") {
          this.loginAdminValidado.emit(data.status);
        } else {
          this.loginAdminValidado.emit(data.status);
        }
      }
    )
    return res;
  }

  public cadastroAdmin(admin: Usuario): void {
    console.log(admin)
    this.http.post("http://localhost:8080/cadastro", admin).subscribe(resultado => console.log(resultado))
  }
}
