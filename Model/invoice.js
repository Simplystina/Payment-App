const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const invoiceModel = new mongoose.Schema(

    {
        id: ObjectId,
        issueDate: {type: Date, required: true},
        jobDescription: {type: String, required:true},
        dueDate: {type: Date, required: true},
        amount: {type: String, required: true},
        draft: {type: Boolean, default: false, enum:[true, false]},
        userId: {type: String},
        clientId:{type: String},
        hasClientPaid:{type:Boolean, default:false, enum:[true, false]},
        paymentreference: {type:String}
     },

    {
    timestamps: true, toJSON: {virtuals: true}
    }
)

const Invoice = mongoose.model('invoice  ', invoiceModel)

module.exports = Invoice
