const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const paymentModel = new mongoose.Schema(
    {
    id: ObjectId,
    name :  {type: String, required: true},
    paymentRef : {type:String, required: true},
    email:       {type: String, required:true},
    note: {type: String},
    companyAddress: {type: String, required: true},
    userId: {type: String}
    },
    {
        timestamps: true, toJSON: {virtuals: true}
    }
)

const Payment = mongoose.model('payment', paymentModel)

module.exports = Payment
