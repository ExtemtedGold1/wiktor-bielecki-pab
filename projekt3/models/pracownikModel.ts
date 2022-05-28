export class pracownik
{
    id:number;
    imie:string;
    nazwisko:string;
    occupation:string;

    constructor(t : pracownik)
    {
        this.id = t.id ?? Date.now();
        this.imie = t.imie;
        this.nazwisko = t.nazwisko;
        this.occupation = t.occupation;
    }
}