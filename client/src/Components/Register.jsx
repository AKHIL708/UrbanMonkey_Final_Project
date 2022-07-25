import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export default function Register() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  const LoadIgnorer = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  let name, value;
  const inputChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setState({ ...state, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword } = state;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("invalid registration details");
      console.log("invalid detaiils");
    } else {
      window.alert("registration successfull");
      console.log("successful registration");
      navigate("/login");
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

      <div className="registerForm">
        <form method="POST" className="form">
          <div className="inputVal">
            <FaUser className="registeriCon" />
            <input
              onChange={inputChange}
              value={state.name}
              type="text"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="inputVal">
            <FaVoicemail className="registeriCon" />
            <input
              onChange={inputChange}
              value={state.email}
              type="text"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="inputVal">
            <FaPhone className="registeriCon" />
            <input
              onChange={inputChange}
              value={state.phone}
              type="text"
              placeholder="Phone"
              name="phone"
            />
          </div>
          <div className="inputVal">
            <FaLock className="registeriCon" />
            <input
              onChange={inputChange}
              value={state.password}
              type="text"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="inputVal">
            <FaLock className="registeriCon" />
            <input
              onChange={inputChange}
              value={state.cpassword}
              type="text"
              placeholder="Confirm Password"
              name="cpassword"
            />
          </div>

          <input type="submit" onClick={PostData} className="inputBtn" />
          <br />
          <span> Already Register : </span>
          <a onClick={LoadIgnorer} href="/login">
            Login In
          </a>
        </form>
      </div>
    </>
  );
}
