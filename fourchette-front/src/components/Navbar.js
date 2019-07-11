import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../imgs/logo_transparent.png'
import fourchette from '../imgs/fourchette.png'
import profile from '../imgs/profile.png'


const Navbar = (props) => {
  return(
    <div className="ui inverted olive menu navbar">
     <Link to="/" className="item"><b>Home</b></Link>
     <Link to="/profile" className="item"><b>Profile</b>
     </Link>
     {<img  src={fourchette} className="logo "/>}
   </div>
  )
}

export default Navbar


// {<img className="profile-small" src={profile} />}
