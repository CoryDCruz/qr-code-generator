const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const CodeSchema = new Schema(
    {
        title: String,
        codeUrl: String, 
        user: { type: Schema.Types.ObjectId, ref: 'User'},
    },
    { timestamps: true }
)

const Code = mongoose.model('Code', CodeSchema)

module.exports = Code