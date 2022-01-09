const express = require('express')
const cors = require('cors')
const router = express.Router()
const Todo = require('../models/todo')

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

router.get('/', async(req, res) =>{
    try{
        const todoList = await Todo.find()
        res.json(todoList)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req, res) =>{

    Todo.init()

    res.type('application/json')
    const todo = new Todo({
        _id : req.body._id,
        title : req.body.title,
        completed : req.body.completed
    })

    try{
        const todo1 = await todo.save()
        res.json(todo1)

    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req, res) =>{
    try{
        const todo = await Todo.findById(req.params.id)
        res.json(todo)
    }catch(err){
        res.send('Error : ' + err)
    }
}) 

router.patch('/:id', async(req, res) =>{

    Todo.init()
    try{
        const todo = await Todo.findById(req.params.id)
        todo.completed = req.body.completed
        const todo1 = await todo.save()
        res.json(todo1)
    }catch(err){
        res.send('Error : ' + err)
    }
})

router.delete('/:id', async(req, res) =>{
    try{
        const todo = await Todo.findById(req.params.id)
        todo.delete()
    }catch(err){
        res.send('Error : ' + err)
    }
})

module.exports = router