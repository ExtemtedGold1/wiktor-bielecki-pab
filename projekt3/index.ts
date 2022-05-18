import { request } from "http";
import express, { response } from 'express'
import {Request, Response} from 'express'
import mongoose from 'mongoose'

const MongoClient = require ('mongodb').MongoClient

const bodyParser = require ('body-parser')
const app = express()
const port = 3000;
app.use(express.json());

MongoClient.connect('mongodb-connection-string', (err, client)=>
{
  
})
















app.get('/', function (req: Request, res: Response) {
    res.send('GET Hello World')
  })
  app.post('/', function (req: Request, res: Response) {
    console.log(req.body) // e.x. req.body.title 
    res.status(200).send('POST Hello World')
  })

  app.listen(3000);