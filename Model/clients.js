const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const clientModel = new mongoose.Schema(
    {
    id: ObjectId,
    name :  {type: String, required: true},
    phoneNumber: {type: String, required: true},
    email:       {type: String, required:true},
    note: {type: String},
    companyAddress: {type: String, required: true},
    userId: {type: String}
   
    },
    {
        timestamps: true, toJSON: {virtuals: true}
    }
)

const Client = mongoose.model('client', clientModel)

module.exports = Client
