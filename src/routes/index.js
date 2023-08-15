const router = require('express').Router()



router.get('/', (req,res) =>{
    res.render('index', {
        title: 'titulo teste'
    })
})

module.exports = router