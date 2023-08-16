
const CustomersModel = require('../models/models')
const {crypto} = require ('../utils/password')

const defaultTitle = 'Cadastro de clientes'

function index(req,res){
    res.render('register', {
        title: defaultTitle
    })
}


async function add(req,res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,  
    })


    register.save()
    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro realizado com sucesso !',
    })
}


async function listUsers(req, res){
    const users = await  CustomersModel.find()

    res.render('listUsers',{
        title: 'Listagem de usuários',
        users,
    })
}


async function formEdit(req, res){
    const {id} = req.query

    const user = await CustomersModel.findById(id)

    res.render('edit', {
        title: 'editar',
        user,
    })
}

async function edit(req, res) {
    const {
        name,
        age,
        email,
    } = req.body

    const {id} = req.params

    const user = await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email


    user.save()


    res.render('edit', {
        title: 'Editar usuario',
        user,
        message: 'Usuario alterado com sucesso '
    })
}

async function remove(req, res)  {
    const {id} = req.params

    const remove = await CustomersModel.deleteOne({_id: id})

    if (remove.ok){
        res.redirect('/listUsers')
    }
}

module.exports = {
    add,
    index,
    listUsers,
    formEdit,
    edit,
    remove,
}