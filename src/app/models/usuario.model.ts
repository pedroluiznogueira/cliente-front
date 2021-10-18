export class Usuario {
    id?: number;
    nomeUsuario?: string;
    senha?: string;
    estaLogado?: boolean = false;
    email?: string;
    tipoConta?: string = "usuario";
    token?: string;
}
