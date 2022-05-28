export enum statusStolika { wolny = 'wolny', zajety = 'zajety', nie_dostepny = 'nie_dostepny'}

export class Stolik
{
    id:number;
    nazwa:string;
    liczbaMiejsc: number;
    status: statusStolika;

    constructor(t : Stolik)
    {
        this.id = t.id ?? Date.now();
        this.nazwa = t.nazwa;
        this.liczbaMiejsc = t.liczbaMiejsc;
        this.status = t.status;
    }
}