export class Cliente {
    private _id?: number | undefined;
    private _nome?: string | undefined;
    private _sobrenome?: string | undefined;
    private _email?: string | undefined;
    
    public get id(): number | undefined {
        return this._id;
    }
    
    public set id(value: number | undefined) {
        this._id = value;
    }

    public get nome(): string | undefined {
        return this._nome;
    }
    public set nome(value: string | undefined) {
        this._nome = value;
    }
    
    public get sobrenome(): string | undefined {
        return this._sobrenome;
    }
    public set sobrenome(value: string | undefined) {
        this._sobrenome = value;
    }
    
    public get email(): string | undefined {
        return this._email;
    }
    public set email(value: string | undefined) {
        this._email = value;
    }
}