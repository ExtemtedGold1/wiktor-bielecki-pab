export class danie{
    id:number;
    nazwa: string;
    cena: number;
    kategoria: string;

    constructor(t : danie)
    {
        this.id = t.id ?? Date.now();
        this.nazwa = t.nazwa;
        this.cena = t.cena;
        this.kategoria = t.kategoria;
    }
}