const UserModel = require("../Model/user")
const jwt = require("jsonwebtoken")




exports.register = async(req,res)=>{
    try {

        //get user input
        console.log(req.body, "vodyyyyyyy")
        const {firstName, lastName, email, password}=data = req.body
        
        if(!(firstName && lastName && email && password)){
            res.status(400).send("All input is required")
        }

        //check if user already exist
        //validate if user exist in our database

        const oldUser = await UserModel.findOne({email})
        if (oldUser) {
            return res.status(409).send("User Already exist. Please Login")
        }

        //create user in our database

        const user = await UserModel.create(data)


        //return new user
        return res.status(201).json(user)
    
    } catch (error) {
        console.log(error,"error")
        
    }
}

exports.login = async(req,res)=>{
    console.log(req.body, "reeee")
    try {
          
        //Get user input
        const {email, password}=data = req.body

        //Validate user input

        if(!(email && password)){
            res.status(400).send("All input is required")
        }

        //Validate if user exist in our database
        const user = await UserModel.findOne({email})
        
        if(!user){
            return res.status(404).send("User doesn't exist")
        }
        
        //validate user password
        const validate = await user.isValidPassword(password)

        if(!validate)
        return res.status(404).send("Wrong password entered")

        //create token
        const token = jwt.sign(
            { userid: user._id, email},
            process.env.JWT_TOKEN,
            {
                expiresIn: "5h"
            }
        )
        //save user token
        userData = user.toObject();
        userData.token = token 
       
        //console.log(token,"tokennnnnnnnnn", user, user.firstName)
        //Delete the password from the object so as not to display the hash to the user
        delete userData.password;
       
        return  res.status(200).json({message:"Logged in successfully", data:userData})
    } catch (error) {
        console.log(error, "error")
    }

}