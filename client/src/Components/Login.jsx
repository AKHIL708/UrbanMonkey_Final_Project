import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaVoicemail } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

export default function Login() { 
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid credentails ");
    } else {
      window.alert("logged In successfully");
      navigate("/mainpage");
    }
  };
  return (
    <>
      <div className="Navbar">
        <img
          className="NavbarImg"
          src="https://media.istockphoto.com/vectors/monkey-icon-vector-id855061748?k=20&m=855061748&s=612x612&w=0&h=oX9htiRmiAfqaOYuj5jg9ioGCp5wJlK9GxY0VRUNwn8="
          alt="urban monkey logo"
        />
        <h1 className="NavbarHeading">Urban Monkey</h1>
        <li>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </li>
      </div>
      <div className="LoginBackgroundColor">
        <div className="loginFormContainer">
          <div className="LoginHeading">
          <h2>Sign In</h2>
          <p>Login to manage your account</p>
          </div>

          <form method="POST" className="loginForm">
            <div className="FormSymbols">
              <FaVoicemail className="LoginFormSymbol" />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                name="email"
              />
            </div>
            <div className="FormSymbols">
              <FaKey className="LoginFormSymbol" />
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                name="password"
              />
            </div>
            <input
              onClick={loginUser}
              className="LoginBtn"
              type="submit"
              style={{backgroundColor : "#1DA1F2",border:"none",fontSize:"15px"}}
            />
          </form>
        </div>
      </div>
    </>
  );
}
