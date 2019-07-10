import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../imgs/logo_transparent.png'

const Navbar = (props) => {
  return(
    <div className="ui inverted olive menu navbar">
     <Link to="/" className="item">
         <div className="content">Fourchette</div>
     </Link>
    { <img src={logo} className="logo"/> }
     <Link to="/" className="item">Home</Link>
     <Link to="/profile" className="item">Profile</Link>
   </div>
  )
}

export default Navbar
