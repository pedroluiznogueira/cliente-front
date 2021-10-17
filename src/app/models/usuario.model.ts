export class Usuario {
    id?: number;
    nomeUsuario?: string;
    senha?: string;
    estaLogado?: boolean = false;
    tipoConta?: string = "usuario";
}
