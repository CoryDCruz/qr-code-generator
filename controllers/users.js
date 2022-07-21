const express = require('express')
const usersRouter = express.Router()
const User = require('../models/user')

//index
usersRouter.get('/', (req,res) => {
    res.send('This is the User Index')
})

//new

//delete

//update

//create

//edit

//show

module.exports = usersRouter