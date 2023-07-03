require("dotenv").config()
const nodemailer = require('nodemailer');
const paystack = require('paystack-api')(process.env.PAYSTACK_SECRET_KEY);
const invoiceModel = require("../Model/invoice")
const userModel = require("../Model/user")
const clientModel = require("../Model/clients")
const axios = require("axios")
// Send an email with a payment link to a recipient

async function sendPaymentEmail(recipientEmail, amount, reference, accountNumber, bankCode) {
  console.log(recipientEmail, amount, reference, accountNumber, bankCode)
  // Create a transport object to send emails
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "stinachinma",
      pass:"jdtnkdlfandgbngz"  
    }
  });
 
  // Generate a payment link with Paystack
  try {
   
    const response = await axios.post('https://api.paystack.co/transaction/initialize',
        {
           email: recipientEmail,
           amount: amount * 100, // Paystack expects amount in kobo (i.e. 100 kobo = 1 Naira)
            reference: reference,
            metadata: {
              custom_fields: [
                {
                  display_name: 'Account Number',
                  variable_name: 'account_number',
                  value: accountNumber
                },
                {
                  display_name: 'Bank Code',
                  variable_name: 'bank_code',
                  value: bankCode
                }
              ]
            },
             // Redirect URL after successful payment
             channels: ['bank_transfer', 'card'],
            callback_url: 'https://your-app.com/payment/success', // Redirect URL after successful payment
           hosted_payment: {
              return_url: 'https://your-app.com/payment/success' // Redirect URL after payment page is closed
           }
        },
        {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
        }
      }
    );
    //console.log("response", response)
    const paymentLink = response.data.data.authorization_url;
    
   
    // Construct the email message
    const message = {
      from: "shecodeafricaui@gmail.com",
      to: recipientEmail,
      subject: 'Freelance Payment Link',
      text: `Hi, I hope this email finds you well. Please click the link to make your payment: ${paymentLink}`
    };
        // Send the email
        transporter.sendMail(message, (err, info) => {
            if (err) {
              console.error(err, "error sending mail");
            } else {
              console.log(`Email sent to ${recipientEmail}: ${info.response}`);
            }
          });

        
        } catch (error) {
           console.log(error, "error")
        }
      


}

// Example usage: Send an email with a payment link to a user
//sendPaymentEmail('recipient@example.com', 500, 'ABC123');

// Generate a unique payment reference
function generatePaymentReference() {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${randomString}`;
  }
exports.sendInvoicePaymentLink = async (req,res)=>{
    try {

        const ref = generatePaymentReference()
        console.log(req.user.userid)
        const user = await userModel.findById(req.user.userid)
        //console.log(user, "user")
       
        const {invoiceId} = req.body
        const invoice = await invoiceModel.find({_id: invoiceId})
        
        const client = await clientModel.find({_id:invoice[0].clientId})
        if(invoice[0].draft){
           return res.status(200).json({status:true, message: "Can't send email to a draft invoice, Add client to send email"})
      }
        //console.log(invoice, "invoiceidddddddddd", client)
         const data =  await sendPaymentEmail(client[0].email, invoice[0].amount, ref, user.accountnumber, "058")

        const result = await invoiceModel.update( {_id: invoiceId }, {$set: {paymentreference: ref}})  
        console.log(result)
        return res.status(200).json({status:true, message:"Email successfully sent to client"})

        
    } catch (error) {
        console.log(error, "error")
        res.send("error")
    }
}



exports.checkPaymentStatus = async(url)=> {
  try {
    const response = await axios.get(url);
   console.log(response
    , "responseee")
    if (response.status === 200) {
      console.log('Payment successful');
      return true;
    } else {
      console.log('Payment failed');
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}


exports.verifyPayment = async (reference) => {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.paystack.co/transaction/verify/${reference}`,
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    });
    
    const { status, data } = response.data;
    console.log(status, reference, data.gateway_response, "responseeeeeee")
    if (status === true && data.status === 'success') {
      return true; // Payment was successful
    } else {
      return false; // Payment was not successful
    }
  } catch (error) {
    console.error(error, "error", reference);
    return false; // An error occurred during verification
  }
};

// Usage example
