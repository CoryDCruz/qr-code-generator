const express = require('express')
const codesRouter = express.Router()
const QRCode = require('qrcode')
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
    User.findById(req.session.user, (error, foundUser) => {
        Code.find({ user: req.session.user }, (error, foundCodes) => {
            res.render('./codes/index.ejs', {
                codes: foundCodes, 
                user: foundUser
            })
        })
    })
    
})

//new
codesRouter.get('/new', (req, res) => {
    res.render('./codes/new.ejs')
})

//delete

//update

//create
codesRouter.post('/new', (req, res) => {
    QRCode.toDataURL(req.body.url, function (err, url) {
        console.log(url)
    })
})
//edit

//show

module.exports = codesRouter