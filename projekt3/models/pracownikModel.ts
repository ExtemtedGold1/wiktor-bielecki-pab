/*const mongoose = require ('mongoose');

const pracownikSchema = mongoose.Schema({
    imie: {
        type: String,
        required: true,
    },
    nazwisko: {
        type: String,
        required: true,
    },
    stanowisko: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    }
})

var pracownikData = mongoose.model('pracownikData', pracownikSchema);
module.exports= pracownikData;*/

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