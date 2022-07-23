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

// logout
usersRouter.get('/logout', (req,res) => {
    req.session.destroy((error) => {
        if(error){
            res.send(error)
        }
        else {
            res.render('./users/logout.ejs')
        }
    })
})

// profile
usersRouter.get('/profile', (req, res) => {
    User.findById(req.session.user, (err, foundUser) => {
        res.render('./users/profile.ejs', {
            user: foundUser
        })
    })
})



//new

//delete

//update

//create

//authentication
usersRouter.post('/login', (req, res) => {
    
    User.findOne( { email: req.body.email }, '+password', (err, foundUser) => {

        if(!foundUser) {
            return res.render('./users/login.ejs', { err: 'Email or Password is incorrect'})
        }   
        if(!bcrypt.compareSync(req.body.password, foundUser.password)) {
            console.log("password incorrect")
            return res.render('./users/login.ejs', { err: 'Incorrect Password'})
        }
        req.session.user = foundUser._id
        res.redirect('/')
    })
})


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
            res.redirect('/users/profile')
        }
    })
})
//edit
usersRouter.get('/edit', (req,res) => {
    User.findById(req.session.user, (err, foundUser) => {
        res.render('./users/edit.ejs', {
            user: foundUser
        })
    })

})

//show

module.exports = usersRouter