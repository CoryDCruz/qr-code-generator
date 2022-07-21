const express = require('express')
const usersRouter = express.Router()
const User = require('../models/user')

const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

const auth = (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/users/login')
    }
}
//index
usersRouter.get('/', (req,res) => {
    res.send('This is the User Index')
})

usersRouter.get('/login', (req, res) => {
    res.render('./users/login.ejs')
})

usersRouter.get('/signup', (req, res) => {
    res.render('./users/signup.ejs')
})

//new

//delete

//update

//create

//edit

//show

module.exports = usersRouter