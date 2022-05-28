export class restauracja{
    id: number;
    nazwa: string;
    adres: string;
    telefon: number;
    nip: number;
    email: string;
    www: string;

    constructor(t : restauracja)
    {
        this.id = t.id ?? Date.now();
        this.nazwa = t.nazwa;
        this.adres = t.adres;
        this.telefon = t.telefon;
        this.nip = t.nip;
        this.email = t.email;
        this.www = t.www;
    }
}