const express = require("express")
const cors = require("cors")
const {connect} = require("./Database")
const auth = require("./Middleware/auth")
const bodyParser = require("body-parser")


require("dotenv").config()

//import Routers
const authRouter = require("./Routers/auth")
const clientRouter = require("./Routers/client")
const invoiceRouter = require("./Routers/invoice")
const paymentRouter = require("./Routers/payment")
const { checkPaymentStatus, verifyPayment } = require("./Controllers/payments")

const PORT = process.env.PORT || 3334
connect()

const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())


app.options('*', cors()); // preflight OPTIONS; put before other routes
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.use('/', authRouter)
app.use('/client', auth, clientRouter)
app.use('/invoice', auth, invoiceRouter)
app.use('/payment', auth, paymentRouter)


//check if payment is successful
//checkPaymentStatus(" https://checkout.paystack.com/sdmauj9g57afb2b")
//verifyPayment()
verifyPayment('1679873854084-6mncms')


app.get('/',(req,res)=>{
    res.status(200).send({message:"Home Route",status:true})
})

app.use("*",(req,res)=>{
    return res.status(404).json({message:"route not found"})
})

app.listen(PORT, ()=>{
    console.log("Server is listening at ",PORT)
})