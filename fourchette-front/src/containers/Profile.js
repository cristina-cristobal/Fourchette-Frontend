import React, {Component} from 'react'
import UserInfo from '../components/UserInfo'
import UserCardContainer from '../components/UserCardContainer'

export default class Profile extends Component {
  render(){
    return(
      <div>
      <UserInfo />
      <UserCardContainer myRecipes={this.props.myRecipes} myTweakedRecipes={this.props.myTweakedRecipes} mySavedRecipes={this.props.mySavedRecipes}
      newlySaved={this.props.newlySaved}/>
      </div>
    )
  }
}
