require("dotenv").config()
const nodemailer = require('nodemailer');
const paystack = require('paystack-api')("sk_test_1fb276a758efec0a369ce7ca9a9409045d2f9d0b");
const axios = require("axios")
// Send an email with a payment link to a recipient

async function sendPaymentEmail(recipientEmail, amount, reference, accountNumber, bankCode) {
  // Create a transport object to send emails
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "stinachinma",
      pass:"jdtnkdlfandgbngz"  
    }
  });
   console.log(process.env.PAYSTACK_SECRET_KEY)
  // Generate a payment link with Paystack
  try {
    console.log("hereeeee", reference, recipientEmail, amount)
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
    console.log("response", response)
    const paymentLink = response.data.data.authorization_url;
  
    // Construct the email message
    const message = {
      from: "shecodeafricaui@gmail.com",
      to: recipientEmail,
      subject: 'Payment Link',
      text: `Please click on the following link to make your payment: ${paymentLink}`
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
        const data =  await sendPaymentEmail("chidinmanwatu1998@gmail.com", 5000, generatePaymentReference(), "0235447806", "058")
        console.log(data)
        res.status(200).json({status:true, message:"Email successfully sent to client"})
    } catch (error) {
        console.log(error, "error")
        res.send("error")
    }
}