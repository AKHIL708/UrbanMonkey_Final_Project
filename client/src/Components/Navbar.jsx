import React from 'react'
import HomePage from './HomePage'
import { Link } from 'react-router-dom'

export default function Navbar() {
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
    <div className="NavbarBottom">
        <p># Were Styles Can't Be Repeated.</p>  
    </div>
    <HomePage/>
    </>
  )
}
