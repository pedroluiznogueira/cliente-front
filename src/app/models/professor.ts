import { Usuario } from "./usuario.model";

export class Professor {
    id?: number;
    nome?: string;
    sobrenome?: string;
    email?: string;
    resumo?: string;
    sobre?: string;
    imagem?: string;
    usuario?: Usuario;

    constructor(id?: number, imagem?: string,  email?: string, nome?: string, sobrenome?: string, resumo?: string, sobre?: string, usuario?: Usuario) {
        this.id = id;
        this.imagem = imagem;
        this.email = email;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.resumo = resumo;
        this.sobre = sobre;
        this.usuario = usuario
    }
}