const express = require('express')
const codesRouter = express.Router()
const Code = require('../models/code')
const User = require('../models/user')

//index
codesRouter.get('/', (req,res) => {
    res.send('This is the Index')
})

//new

//delete

//update

//create

//edit

//show

module.exports = codesRouter