import { Curso } from "./curso";
import { Usuario } from "./usuario.model";

export class Pedido {
    id?: number;
    cursos?: Curso[];
    usuario?: Usuario;


    constructor(id?: number, cursos?: Curso[], usuario?: Usuario) {
        this.id = id;
        this.cursos = cursos;
        this.usuario = usuario;
    }


}