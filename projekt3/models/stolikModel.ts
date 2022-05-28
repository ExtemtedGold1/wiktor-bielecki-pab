import mongoose from 'mongoose';
const stolikSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        min:6,
        max:10,
    },
    liczbaLudzi:{
        type:Number,
        requried:true,
    },
    status:{
        type:String,
        enum:['wolny','zajety','nie dostepny'],
        default:'wolny'
    },
});

module.exports = mongoose.model('stolik', stolikSchema);