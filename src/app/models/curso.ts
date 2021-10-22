import { Professor } from "./professor";

export class Curso {
    id?: number | undefined;
    titulo?: string;
    descricao?: string;
    valor?: number;
    cliente?: Cliente | undefined;
    
    constructor(titulo?: string, descricao?: string, valor?: number, cliente?: Cliente) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.valor = valor;
        this.cliente = cliente;
    }
}
