const express = require("express")
const app = express();
const path = require("path")


const dotenv = require("dotenv")
dotenv.config({path: './config.env' })
require("./db/conn")
app.use(require(path.join(__dirname,"./router/auth.js")))
const PORT = process.env.PORT || 5000;
app.use(express.json())


app.listen(PORT ,"localhost", ()=>{
   console.log(`port running at ${PORT}`)
})