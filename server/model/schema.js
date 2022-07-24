const mongoose = require("mongoose")
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
    
})
const UrbanRegistration = mongoose.model("UrbanRegistration",Data)
module.exports = UrbanRegistration;