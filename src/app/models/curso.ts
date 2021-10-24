import { Professor } from "./professor";

export class Curso {
    id?: number | undefined;
    imagem?: string;
    titulo?: string;
    resumo?: string;
    descricao?: string;
    requisitos?: string;
    valor?: number;
    professor?: Professor | undefined;
    
    constructor(imagem?: string, titulo?: string, resumo?: string, descricao?: string, requisitos?: string, valor?: number, professor?: Professor) {
        this.imagem = imagem;
        this.titulo = titulo;
        this.resumo = resumo;
        this.descricao = descricao;
        this.requisitos = requisitos;
        this.valor = valor;
        this.professor = professor;
    }
}
