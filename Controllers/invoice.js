const invoiceModel = require("../Model/invoice")
const clientModel = require("../Model/clients")

exports.createInvoice = async(req,res)=>{

    try {

        const { issueDate, jobDescription, dueDate, amount, clientId}  = req.body
         
        let userData = req.body
 

        if(!clientId){
            userData.draft = true
        }else{
            const clientID = await clientModel.find({_id: clientId, userId: req.user.userid })

            console.log(clientID, "clientIddddddddddddddd")
            if(clientID.length ===  0){
                return res.status(404).send({
                    message: `The client Id passed doesn't exist`
                })
             }
              
        }   

       
         
          userData.userId = req.user.userid 

        if(!(issueDate && jobDescription && dueDate && amount)){
           return  res.status(422).send({message: "Complete all fields"})
        }
    
        const data = await invoiceModel.create(userData)
        console.log("data", data)

        return res.status(200).json({
            message: "Invoice created successfully",
            status: "true",
           data: data
        })

    } catch (error) {
        console.log(error._message)
        return res.status(404).send({
            message: `${error._message || 'error receiving data'} `
        })
    }
}

exports.addClient = async(req,res)=>{
    const {clientId, invoiceId} = req.body
    try {

        if(!(clientId && invoiceId)){
            return  res.status(422).send({message: "Complete all fields"})
        }

        //check if user has registered this client
        const clientID = await clientModel.find({_id: clientId, userId: req.user.userid })

        console.log(clientID, "clientIddddddddddddddd")
        if(clientID.length ===  0){
                return res.status(404).send({
                    message: `The client id passed either doesn't exist at all or it doesn't exist as a client to this user`
                })
        }

        const result = await invoiceModel.update(
            {_id: invoiceId },
            {$set: {clientId: clientId, draft: false}}
            )  
      
        res.status(200).json({message:"Client added to invoice", status: true, data: result}) 
         
    } catch (error) {
        
    }
}
exports.getAllInvoice = async(req,res)=>{
    
    try {
        const userId = req.user.userid
        console.log(userId, "userId")

        const result = await invoiceModel.find({userId: userId})  

        res.status(200).json({message:"Successfully retrieved all Invoice", status: true, data: result})

    } catch (error) {
        res.status(404).send("Something went wrong, check logs")
    }

}

exports.sendInvoice = async()=>{
    const { clientEmail} = req.body
    try {
        
    } catch (error) {
        
    }
}

exports.updateInvoice = async(req,res)=>{
    try {
        const id = req.params.id
        const data = req.body
        const update = await invoiceModel.findByIdAndUpdate(id, data, {new:true})
        res.status(200).json({message: "Notes updated successfully", status: true, data:update})
    } catch (error) {
        console.log(error, "error")
    }
}


exports.deleteInvoice = async(req,res)=>{
    
    try {

        const id = req.params.id
      
        const data = await invoiceModel.findByIdAndDelete(id)
        console.log(data, "dataaaaaaaa")
           return res.status(200).json({message: "Invoice Deleted successfully", status: true})
       
    } catch (error) {
        console.log(error, "error")
    }
    
}