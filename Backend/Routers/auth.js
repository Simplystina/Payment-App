const express = require("express")
const authController = require("../controllers/auth")

require("dotenv").config()

const authRouter = express.Router()



authRouter.post('/register', authController.register)
authRouter.post('/login', authController.login)
authRouter.get("/open", async(res,req)=>{
    res.send("Open links")
})

module.exports = authRouter