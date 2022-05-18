import { request } from "http";
import express, { response } from 'express'
import {Request, Response} from 'express'
import mongoose from 'mongoose'

const MongoClient = require ('mongodb').MongoClient

const bodyParser = require ('body-parser')
const app = express()
//const port = 3000;
app.use(express.json());

const url= "mongodb://localhost:27017";

mongoose.connect(url, {useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
  con.on('open', () =>{
    console.log('connection');
  })
}catch(error){
  console.log("Error: "+error);
}

const port=9000;
app.listen(port. () => {
  console.log('Server started');
})














app.get('/', function (req: Request, res: Response) {
    res.send('GET Hello World')
  })
  app.post('/', function (req: Request, res: Response) {
    console.log(req.body) // e.x. req.body.title 
    res.status(200).send('POST Hello World')
  })

  app.listen(3000);