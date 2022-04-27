import { request } from "http";
import express, { response } from 'express'
import {Request, Response} from 'express'

const app = express()
const port = 3000;


app.get('/', function (req: Request, res: Response) {
    res.send('GET Hello World')
  })
  app.post('/', function (req: Request, res: Response) {
    console.log(req.body) // e.x. req.body.title 
    res.status(200).send('POST Hello World')
  })

  app.listen(3000);