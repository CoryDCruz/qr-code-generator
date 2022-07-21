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

// login page
usersRouter.get('/login', (req, res) => {
    res.render('./users/login.ejs')
})

// signup page
usersRouter.get('/signup', (req, res) => {
    res.render('./users/signup.ejs')
})

usersRouter.get('/profile', (req, res) => {
    res.render('./user/profile.ejs')
})

//new

//delete

//update

//create
usersRouter.post('/signup', (req, res) => {
    if (req.body.password.length < 7) {
        return res.render('./users/signup.ejs', 
        { 
            err: "Password must be at least 7 characters in length"
        })
    }
    const hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(SALT_ROUNDS))
    req.body.password = hash
    User.create(req.body, (error, user) => {
        if (error){
            res.render('.user/signup.ejs', {
                err: 'User email already exists'
            })
        } else {
            req.session.user = user._id
            res.redirect('/user/profile')
        }
    })
})
//edit

//show

module.exports = usersRouter