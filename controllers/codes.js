const express = require('express')
const codesRouter = express.Router()
const Code = require('../models/code')
const User = require('../models/user')

codesRouter.use(function (req, res, next) {
    if(req.session.user) {
        next()
    } else {
        res.redirect('/users/login')
    }
})
//User's code index
codesRouter.get('/', (req,res) => {
    User.findById(req.session.user, (error, user) => {
        Code.find({ user: req.session.user }, (error, foundCodes) => {
            res.render({
                codes: foundCodes
            })
        })
    })
    
})

//new

//delete

//update

//create

//edit

//show

module.exports = codesRouter