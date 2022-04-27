import express, { response } from 'express'
import {Request, Response} from 'express'

const app = express()
const port = 3000;

/*const url = 'http://localhost/login';

const username = 'username';
const password = 'password';

function login(){
    return fetch(url, {
        method: 'post',
        headers: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    })
    .then((response) => {
        if(!response.ok){
            throw response;
        }
        return response.json();
    })
}

((button) => {
    button.addEventListener('click', (event)=>{
        login()
        .then((response) =>{
            console.log(result.token);
        })
    });
})(document.querySelector('#submit'));*/


const notes = [
    {id: 1, name:'Notatka 1', desc: 'Notatka numer 1'},
    {id: 2, name:'Notatka 2', desc: 'Notatka numer 2'},
    {id: 3, name:'Notatka 3', desc: 'Notatka numer 3'}
]

export interface Tag{
    id?: number;
    name: string;
}

app.use(express.json())

app.post('/notes', (req, res) => {
    const newNotes = {
        id: notes.length + 1,
        name: req.body.name,
        desc: req.body.desc
    }
    notes.push(newNotes)
    res.status(200).json(newNotes)
})

app.get('/notes', (req, res) =>{
    res.json(notes)
})

app.get('/notes/:notesID', (req, res) =>{
    const id = Number(req.params.notesID)
    const index = notes.findIndex(note => note.id === id)
    //const note = notes.find(notes => notes.id === id)

    if(index === -1){
        return res.status(404).send('Tag not found')
    }
    const updateNote = {
        id: notes[index].id,
        name: req.body.name,
        desc: req.body.desc
    }
    notes[index] = updateNote
    res.status(200).json('Note updated')
    //res.json(notes)
})

app.delete('/notes/:notesID', (req,res)=>{
    const id = Number(req.params.notesID)
    const index = notes.findIndex(note => note.id === id)
    if (index === -1){
        return res.status(404).send('tag not found')
    }
    notes.splice(index,1)
    res.status(200).json('note deleted')    
})


app.get('/', function (req: Request, res: Response) {
    res.send('GET Hello World')
  })
  app.post('/', function (req: Request, res: Response) {
    console.log(req.body) // e.x. req.body.title 
    res.status(200).send('POST Hello World')
  })

/*
const authData = req.headers.authorization
const token = authData?.split('') [1] ?? ' '
const payload = jwt.verify(token, secret)*/

app.listen(3000)