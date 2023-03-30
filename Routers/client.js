const express = require("express")

const clientController = require("../Controllers/clients")

const clientRouter = express.Router()

clientRouter.post('/create', clientController.createClient)
clientRouter.get('/all', clientController.getAllClients)
clientRouter.delete('/delete/:id', clientController.deleteClient)
clientRouter.patch('/update/:id', clientController.updateClient)

module.exports = clientRouter