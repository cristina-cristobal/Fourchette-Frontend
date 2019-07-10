import React, {Component} from 'react'
import Summary from '../components/Summary'
import Ingredients from '../components/Ingredients'
import Steps from '../components/Steps'
import Tweaks from '../components/Tweaks'
import {Grid, Image} from 'semantic-ui-react'

export default class RecipeBody extends Component {
  render(){
    return(
      <div className="recipe-body">
      <Summary recipe={this.props.clickedRecipe}/>
      <Steps recipe={this.props.clickedRecipe} like={this.props.like} allRecipes={this.props.allRecipes} addingTweak={this.props.addingTweak} newlySaved={this.props.newlySaved}/>
      <Tweaks recipe={this.props.clickedRecipe} />
      </div>
    )
  }
}
