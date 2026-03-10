const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let todos = [
    {id: 1, text: 'learn svelte', done: false},
    {id: 2, text: 'build fullstack apps', done: false},
]

app.get('/API/todos', (req,res)=>{
    res.json(todos)
})

app.post('/API/todos', (req,res)=>{
    const newTodo = {
        id: Date.now(),
        text: req.body.text,
        done: false
    }

    todos.push(newTodo)
    res.json(newTodo)
})

app.put('/API/todos/:id',(req,res)=>{
    const id = parseInt(req.params.id)

    todos = todos.map(todo =>
        todo.id === id
        ? {...todo, text: req.body.text, done: req.body.done}
        : todo
    )

    res.json({success: true})
})

app.delete('/API/todos/:id', (req,res)=>{
    const id = parseInt(req.params.id)

    todos = todos.filter(todo => todo.id !== id)

    res.json({success: true})
})

app.get('/',(req,res)=>{
    res.json({message: 'backend is running 🚀'});
});

app.listen(port,(req,res)=>{
    console.log(`server berjalan di port ${port}!`);
});