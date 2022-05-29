import mongoose from "mongoose";

const pracownik = new mongoose.Schema({
    imie:{
        type:String,
        required:true,
    },
    nazwisko:{
        type:String,
        required:true,
    },
    stanowisko:{
        type:String,
        required:true
    }
})

const pracownikModel = mongoose.model('pracownik',pracownik)
export default pracownikModel;