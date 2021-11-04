import { Curso } from "./curso";
import { Usuario } from "./usuario.model";

export class Pedido {
    id?: number;
    valorTotal?: number;
    usuario?: Usuario;


    constructor(id?: number, usuario?: Usuario, valorTotal?: number) {
        this.id = id;
        this.usuario = usuario;
        this.valorTotal = valorTotal;
    }


}