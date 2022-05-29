import { ChangeStreamDocument } from "mongodb";
import mongoose from "mongoose";

const connString = 'mongodb+srv://Admin1:Admin1_@cluster0.3pqqy.mongodb.net/?retryWrites=true&w=majority'



export const main = () => {
    console.log('Connecting to mongo');
    const db = mongoose.connect(connString)
    console.log('Mongo Connected!')
}
