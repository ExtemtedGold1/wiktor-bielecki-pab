import {Stolik} from './stolikModel'
export class rezerwacaja{
    id:number;
    table: Stolik;
    start: Date;
    end:Date;
    client: string;

    constructor(t : rezerwacaja)
    {
        this.id = t.id ?? Date.now();
        this.table = t.table;
        this.start = t.start;
        this.end = t.end;
        this.client = t.client;
    }
}