import { Professor } from "./professor";

export class Curso {
    id?: number | undefined;
    titulo?: string;
    descricao?: string;
    valor?: number;
    professor?: Professor | undefined;
    
    constructor(titulo?: string, descricao?: string, valor?: number, cliente?: Professor) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.valor = valor;
        this.professor = cliente;
    }
}
