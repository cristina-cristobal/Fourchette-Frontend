import React, {Component} from 'react'
import profile from '../imgs/prof.png'


export default class UserInfo extends Component {
  render(){
    return(
      <div className="user-info profile-column">
        {<img className="profile-icon" src={profile} />}
        <div className="user-font">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        Tina Cristobal
        </div>
      </div>
    )
  }
}
