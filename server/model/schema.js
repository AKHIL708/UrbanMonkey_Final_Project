const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const Data = new mongoose.Schema({
    name : {
        type : String,
        requrie: true
    },
    phone : {
        type : Number,
        requrie: true
    },
    email : {
        type : String,
        requrie: true
    },
    password : {
        type : String,
        requrie: true
    },
    cpassword : {
        type : String,
        requrie: true
    },
    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ]
    
})

Data.pre('save', async function(next){
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password , 12);
       console.log(this.password)
        this.cpassword = await bcrypt.hash(this.cpassword , 12);
        console.log(this.cpassword)
    }
    next();
})


// generating auth token here 

Data.methods.generateAuthToken = async function(){
    try{
        let tokenCreated = jwt.sign({_id : this._id },process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:tokenCreated})
        await this.save();
        return tokenCreated;
    }catch(e){
        console.log(e)
    }
}

const UrbanRegistration = mongoose.model("UrbanRegistration",Data)
module.exports = UrbanRegistration;