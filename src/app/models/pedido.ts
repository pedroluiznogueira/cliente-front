import { Curso } from "./curso";
import { Usuario } from "./usuario.model";

export class Pedido {
    id?: number;
    cursos?: Curso[];
    usuario?: Usuario;

}