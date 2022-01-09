const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todoRouter = require('./routers/todo')

const url = "mongodb://localhost/TodoAppBD"

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () =>{
   console.log('connected')
})

app.use(express.json())

app.use('/todo', todoRouter)

app.listen(5000, () =>{
    console.log('server started')
})