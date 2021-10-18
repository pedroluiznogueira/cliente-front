export class Usuario {
    id?: number;
    nome?: string;
    senha?: string;
    logado?: boolean = false;
    email?: string;
    tipo?: string = "usuario";
    token?: string;
}
