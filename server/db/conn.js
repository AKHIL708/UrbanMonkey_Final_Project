const mongoose = require("mongoose")
const DB = process.env.DATABASE || 5000;
mongoose
.connect(DB)
.then(()=> console.log("db is connected succesfully"))
.catch((err)=> console.log(err))