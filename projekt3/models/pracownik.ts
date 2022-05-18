/*cosnt pracownikWzor = new pracownikModel.wzor({
    //id: number;
    imie: string;
    nazwisko: string;
    stanowisko: string;
})

export class pracownikModel{
    pracownik = pracownikModel.model('user', pracownikWzor);

    public saveUser(posts, callback) {
        this.pracownik.create(posts, callback)
    }

    public fetchUser(id, callback) {
        this.pracownik.findById(id, callback)
    }
}

*/

const mongoose = require ('mongoose');

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
module.exports= pracownikData;