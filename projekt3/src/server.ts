import express, {response} from 'express';
import {Request, Response} from 'express';
import mongose from 'mongoose';
//import { add_pracownika } from '../services/render';
require('dotenv').config();


const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
//Routes
//app.use('/', require('../routes/router'))


































//log request
app.use(morgan('tiny'));

//parse requset to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set('view engine', 'ejs')
//app.set('views',path.resolve(__dirname, 'views/ejs'))

//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))
//css/style.css

app.get('/', (req, res) =>{
  res.render('index');
})


//Database
mongoose
  .connect('mongodb+srv://Admin1:Admin1_@cluster0.3pqqy.mongodb.net/?retryWrites=true&w=majority')
  .then(() =>{
    console.log("połączono z bazą danych");
  })
  .catch((error: any) => {
    console.log("Błąd połączenia z bazą danych")
    console.error(error);
    process.exit(1);
  });
app.listen(3000, () =>{console.log('Server is running on http://locahost:${3000}')});