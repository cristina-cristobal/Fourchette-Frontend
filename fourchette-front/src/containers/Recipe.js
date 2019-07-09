import React, {Component} from 'react'
import Summary from '../components/Summary'
import Ingredients from '../components/Ingredients'
import Steps from '../components/Steps'
import Tweaks from '../components/Tweaks'

export default class RecipeBody extends Component {
  render(){
    return(
      <div>
        <Summary recipe={this.props.clickedRecipe}/>
        <Ingredients recipe={this.props.clickedRecipe}/>
        <Steps recipe={this.props.clickedRecipe} like={this.props.like} allRecipes={this.props.allRecipes} addingTweak={this.props.addingTweak}/>
        <Tweaks recipe={this.props.clickedRecipe} />
      </div>
    )
  }
}
