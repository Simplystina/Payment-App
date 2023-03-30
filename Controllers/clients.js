const clientModel = require("../Model/clients")


exports.createClient = async(req,res)=>{
    try {

        const { name, phoneNumber, email, companyAddress  }  = req.body
         
         let userData = req.body
           userData.userId = req.user.userid 

        if(!(name && phoneNumber && email && companyAddress)){
           return  res.status(422).send({message: "Data entered is invalid"})
        }
       
        const data = await clientModel.create(userData)
        console.log("data", data)

        return res.status(200).json({
            message: "Client created successfully",
            status: "true",
           data: data
        })

    } catch (error) {
        console.log(error)
        return res.status(404).send({
            message:"Title already used"
        })
    }
}


exports.getAllClients = async(req,res)=>{
    
    try {
        const userId = req.user.userid
        console.log(userId, "userId")

        const result = await clientModel.find({userId: userId })  

        res.status(200).json({message:"Successfully retrieved", status: true, data: result})

    } catch (error) {
        res.status(404).send("Something went wrong, check logs")
    }
}




exports.updateClient = async(req,res)=>{
    try {
        const id = req.params.id
        const data = req.body
        const update = await clientModel.findByIdAndUpdate(id, data, {new:true})
        res.status(200).json({message: "Client details updated successfully", status: true, data:update})

    } catch (error) {
        console.log(error, "errorrrrrrrr")
    }
}
exports.deleteClient = async(req,res)=>{
    try {
        const id = req.params.id
      
        const data = await clientModel.findByIdAndDelete(id)
        console.log(data, "dataaaaaaaa")
           return res.status(200).json({message: "Invoice Deleted successfully", status: true})
       
    } catch (error) {
        
    }
}
