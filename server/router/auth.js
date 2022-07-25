const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../model/schema");


router.use(express.json())

router.get("/",(req,res)=>{
    res.send("router home page")
})
router.get("/register",(req,res)=>{
    res.send("router registration page")
})
router.get("/login",(req,res)=>{
    res.send("plz loign yourself at post login Page ")
})
router.get("*",(req,res)=>{
res.send("path cannot be found check corectly")
})


// router.post("/register",async(req,res)=>{
//     let {name , phone , email , password , cpassword} = req.body;
//     const UserData =  new  UserRegistration({
//         name : req.body.name,
//         phone : req.body.phone,
//         email : req.body.email,
//         password : req.body.password,
//         cpassword : req.body.cpassword
//     })
    
//     if(!name || !phone || !email || !password || !cpassword){
//         return   res.status(422).json({message : "fill all details"})
//     }
    
//     try{

//          let data = await UserRegistration.findOne({email})

//      if(password != cpassword){
//         res.status(422).json({message : "both the password are not matching plz recheck "})
//     }else if(data){
//         res.status(422).json({message :"email already exist try another one"})
//     }else{
//         UserData.save()
//         console.log(UserData)
//         res.status(201).json({message : "registration Success"})
//     }
//     }catch(e){
//         console.log(e)
//     }
// });

router.post("/register", async(req,res)=>{
    const {name , email ,  phone , password , cpassword} = req.body;

    try{
        const userExist = await User.findOne({email});
        if(userExist){
            res.status(405).json({mesage : "email already exist"})
        }else if(password != cpassword){
            res.status(405).json({message : "passwords are not matching"})
        }else if(!name || !email || !phone || !password || !cpassword){
            res.status(405).json({message : "incomplete filed fill full form "})
        }else{
          const userData = await new User(req.body);
          res.send(userData)
          userData.save();
        }
        

    }catch(e){
        res.send(e)
        console.log(e)
    }
})

router.post("/login", async (req,res)=>{
    try{
     let token;
    const {email , password} = req.body;
    
    if(!email || !password){
      return res.status(400).json({message : "fill the form"});
  
    }
    const UserLogin = await User.findOne({ email : email })
  
    if(UserLogin){
      const isMatch = await bcrypt.compare(password,UserLogin.password)
  
     token = await UserLogin.generateAuthToken();
     console.log(token)
  
     res.cookie("akhiljwt", token , {
      expires : new Date(Date.now() + 25892000000)
     })
      if(!isMatch){
        res.status(400).json({erro : "invalid password"})
      }else{
        res.json({message : "user signin successful"})
      }
    }else{
      res.status(400).json({error : "invalid email"})
    }
  
   }catch(e){
    res.send(e)
    console.log(e)
   }
    })


module.exports = router;