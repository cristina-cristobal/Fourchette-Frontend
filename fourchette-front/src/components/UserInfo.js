import React, {Component} from 'react'

export default class UserInfo extends Component {
  render(){
    return(
      <div>
        Username: {this.props.userInfo.username}
        <br></br>
        Name: {this.props.userInfo.full_name}
        <br></br>
        <br></br>
      </div>
    )
  }
}
