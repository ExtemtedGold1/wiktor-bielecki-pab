export enum jednostkaMiary { gram = 'g', delagram = 'dg', kilogram = 'kg', tona = 't'}

export class produkt{
    id:number;
    nazwa: string;
    cena: number;
    ilosc: number;
    jednostkaMiary: number;

    constructor(t : produkt)
    {
        this.id = t.id ?? Date.now();
        this.nazwa  = t.nazwa;
        this.cena = t.cena;
        this.ilosc = t.ilosc;
        this.jednostkaMiary = t.jednostkaMiary;
    }
}