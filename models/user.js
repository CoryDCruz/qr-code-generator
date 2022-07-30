const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, unique: true, lowercase: true},
        password: { type: String, required: true, min: 7},
    },
    { timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User