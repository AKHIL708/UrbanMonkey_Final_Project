import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  const [email , setEmail] = useState();
  const [password , setPassword ] = useState();

  const loginUser = async (e)=>{
    e.preventDefault();
    
    const res = await fetch('/login',{
      method:"POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
   email : email,
   password : password
      })
    })
  const data = res.json();
  if(res.status === 400 || !data){
    window.alert("invalid credentails ")
  }else{
    window.alert("logged In successfully")
    navigate("/mainpage");
  }
    }
  return (
 <>
       <div className='Navbar'>
        <img className='NavbarImg' src="https://media.istockphoto.com/vectors/monkey-icon-vector-id855061748?k=20&m=855061748&s=612x612&w=0&h=oX9htiRmiAfqaOYuj5jg9ioGCp5wJlK9GxY0VRUNwn8=" alt="urban monkey logo" />
        <h1 className='NavbarHeading'>Urban Monkey</h1>    
        <li>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </li>
        </div>

        <div className="loginFormContainer">
          
       <form method="POST" className='loginForm'>
       
        <input type="text"  value={email}    onChange={(e)=> setEmail(e.target.value)}    placeholder='Your Email' name='email'/>
        <input type="text"  value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Your password' name='password'/>
        <input onClick={loginUser} type="submit"style={{borderRadius:"5px",padding :"0px 5px",marginLeft:"auto",marginTop:"15px",color:"white", backgroundColor:"green"}} />
       </form>
        </div>
 </>
    

  )
}
