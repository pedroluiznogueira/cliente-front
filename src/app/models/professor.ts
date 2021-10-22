export class Professor {
    id?: number;
    nome?: string;
    sobrenome?: string;
    email?: string;

    constructor(id?: number, nome?: string, sobrenome?: string, email?: string) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
    }
}