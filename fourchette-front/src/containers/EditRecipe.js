import React, {Component} from 'react'
import TweakForm from '../components/TweakForm'
import EditBar from '../components/EditBar'

export default class EditRecipe extends Component {
  render(){
    return(
      <div>
        Edit Recipe Pg
        <EditBar />
        <TweakForm recipe={this.props.recipe} addingTweak={this.props.addingTweak} />
      </div>
    )
  }
}
