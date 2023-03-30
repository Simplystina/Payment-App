const express = require("express")

const invoiceController = require("../Controllers/invoice")

const invoiceRouter = express.Router()

invoiceRouter.post('/create', invoiceController.createInvoice)
invoiceRouter.get('/all', invoiceController.getAllInvoice)
invoiceRouter.post('/add-client',invoiceController.addClient)
invoiceRouter.patch('/update/:id', invoiceController.updateInvoice)

module.exports = invoiceRouter