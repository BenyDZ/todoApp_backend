const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({

    _id: Number,

    title : {
        type : String,
        required : true
    },

    completed : {
        type : Boolean,
        required : true,
        default : false
    }
})

module.exports = mongoose.model('Todo', todoSchema)