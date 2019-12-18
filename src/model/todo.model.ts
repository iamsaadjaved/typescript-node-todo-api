import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({

    Todo : {
        type : String,
    },

    description: {
        type : String,
    }
})


const Todo = mongoose.model('Todo' , TodoSchema )

module.exports = Todo