import React, {Component} from 'react'
import UserInfo from '../components/UserInfo'
import UserCardContainer from '../components/UserCardContainer'

export default class Profile extends Component {
  render(){
    return(
      <div>
      <UserInfo userInfo={this.props.userInfo}/>
      <UserCardContainer myRecipes={this.props.myRecipes}/>
      </div>
    )
  }
}
