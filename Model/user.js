const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UserModel = new mongoose.Schema({
    firstName :{type: String, required: true},
    lastName :{type: String, required: true},
    phoneNumber: {type: String, required: true, unique : true},
    email: {type: String, required:true, unique: true},
    password: {type: String, required:true,},
})


UserModel.pre(
    'save',
    async function(next){
        const user = this;
        const hash = await bcrypt.hash(this.password, 10)

        this.password = hash
        next()
    }
)

UserModel.methods.isValidPassword = async function(password){
    const user = this
    const compare = await bcrypt.compare(password, user.password)
    
    return compare
}

const User = mongoose.model('users', UserModel)

module.exports = User