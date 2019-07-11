import React, {Component} from 'react'
import TweakForm from '../components/TweakForm'


export default class EditRecipe extends Component {
  render(){
    return(
      <div>
        <TweakForm recipe={this.props.recipe} addingTweak={this.props.addingTweak} />
      </div>
    )
  }
}
