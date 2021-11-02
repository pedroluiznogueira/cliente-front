import { Pedido } from "./pedido";

export class Usuario {
    id?: number;
    nome?: string;
    sobrenome?: string;
    senha?: string;
    logado?: boolean = false;
    email?: string;
    tipo?: string = "usuario";
    token?: string;
    imagem?: string;
    manchete?: string;
    biografia?: string;
    pedidos?: Pedido[];
}
