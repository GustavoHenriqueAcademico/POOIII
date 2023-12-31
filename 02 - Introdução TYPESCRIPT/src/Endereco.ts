enum ESTADO{
    AC,
    AL,
    AP,
    AM,
    BA,
    CE,
    DF,
    ES,
    GO,
    MA,
    MT,
    MS,
    MG,
    PA,
    PB,
    PR,
    PE,
    PI,
    RJ,
    RN,
    RS,
    RO,
    RR,
    SC,
    SP,
    SE,
    TO,
}

export default class Endereco{ 
    /*rua numero cidade estado */

    private _rua: string;
    private _numero: number;
    private _cidade:string;
    private _estado:ESTADO;

    constructor (rua: string, numero: number, cidade: string, estado: ESTADO){
        this._rua = rua;
        this._numero = numero;
        this._cidade = cidade;
        this._estado = estado;
    }

    get rua(): string{
        return this._rua;
    }

    get numero(): number{
        return this._numero;
    }

    get cidade(): string{
        return this._cidade;
    }
     
    get estado(): ESTADO{
        return this._estado;
    }

    set rua(rua :string){
        this._rua = rua;
    }
    set numero(numero :number){
        this._numero = numero;
    }
    set cidade(cidade :string){
        this._cidade = cidade;
    }

    set estado(estado :ESTADO){
        this._estado = estado;
    }
}