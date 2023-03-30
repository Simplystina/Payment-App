const express = require("express")

const paymentController = require("../Controllers/payments")

const paymentRouter = express.Router()

paymentRouter.post('/send-link', paymentController.sendInvoicePaymentLink)

module.exports = paymentRouter