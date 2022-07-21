const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, unique: true},
        password: { type: String, required: true, min: 7},
    },
    { timestamps: true }
)

const User = mongoose.Schema('User', UserSchema)

module.exports = User