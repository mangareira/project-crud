const mongoose = require('mongoose')


function connect (){

    const DB_URL = 'mongodb://127.0.0.1:27017/project-crud'
    mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true,})
    const db = mongoose.connection
    
    db.once('open', () => {
        console.log('ok, funfou')
    })
    
    db.on('error', console.error.bind(console, 'connection erro:'))
}

module.exports = {
    connect
}