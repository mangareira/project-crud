const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String, 
})

const Model = mongoose.model('constumers', schema)

module.exports= Model