import React from 'react'
import {Link} from 'react-router-dom'
// import logo_transparent.png from '../imgs/logo_transparent'

const Navbar = (props) => {
  return(
    <div className="ui inverted olive menu navbar">
     <Link to="/" className="item">
         <div className="content">Fourchette</div>
     </Link>
     <Link to="/" className="item">Home</Link>
     <Link to="/profile" className="item">Profile</Link>
   </div>
  )
}

export default Navbar
