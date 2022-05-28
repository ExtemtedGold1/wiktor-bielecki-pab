import { danie } from "./daniaModel";
import { pracownik } from "./pracownikModel";
import { Stolik } from "./stolikModel";

enum statusZamownienia { zamowiony = 'zamowiony',
 w_trakcie='w_trakcie', zrealizowany='zrealizowany', rachunek='rachunek' }

 export class zamowienia
 {
    id:number;
    pracownik:pracownik;
    danie:danie;
    status:statusZamownienia;
    stolik:Stolik;
    cena:number;

    constructor(t : zamowienia)
    {
        this.id = t.id ?? Date.now();
        this.pracownik = t.pracownik;
        this.danie = t.danie;
        this.status = t.status;
        this.stolik = t.stolik;
        this.cena = t.cena;
    }
 }