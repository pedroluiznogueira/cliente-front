import { Cliente } from "./cliente.model";

export class Servico {
    id?: number | undefined;
    titulo?: string;
    descricao?: string;
    valor?: number;
    cliente?: Cliente;
}
