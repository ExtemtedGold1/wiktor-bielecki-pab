import express, {response} from 'express';
import {Request, Response} from 'express';
const {MongoClient} = require('mongodb');
const app = express();
const PORT = process.env.PORT || 8080

async function main(params:type) {
  
}

app.get('/',(req,res) =>{
  res.send("Tu będzie restauracja");
})

app.listen(3000, () =>{console.log('Server is running on http://locahost:${3000}')});