//dependencies 
require('dotenv').config()
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')
const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const morgan = require('morgan')
const methodOverride = require('method-override')
const usersController = require('./controllers/users')
const codesController = require('./controllers/codes')

const app = express()

const { DATABASE_URL, PORT, SECRET } = process.env

mongoose.connect(DATABASE_URL)

const db = mongoose.connection

db.on('connected', () => {
    console.log('MongoDB is connected')
})

db.on('disconnected', () => {
    console.log('MongoDB is disconnected')
})

db.on('error', (error) => {
    console.log(`MongoDB Error: ${error}`)
})

//middleware 

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(morgan('dev'))
app.use(session({
    secret: SECRET, 
    resave: false,
    saveUninitialized: false
}))


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.redirect('/codes')
})

app.use('/codes', codesController)
app.use('/users', usersController)



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
