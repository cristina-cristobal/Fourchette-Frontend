import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../imgs/logo_transparent.png'
import fourchette from '../imgs/fourchette.png'

const Navbar = (props) => {
  return(
    <div className="ui inverted olive menu navbar">
     <Link to="/" className="item"><b>Home</b></Link>
     <Link to="/profile" className="item"><b>Profile</b></Link>
     {<img  src={fourchette} className="logo center"/>}
   </div>
  )
}

export default Navbar
