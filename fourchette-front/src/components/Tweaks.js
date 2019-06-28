import React, {Component} from 'react'

export default class Tweaks extends Component {
  // If this.props.recipe.prev_recipe_id !== null
  // THEN... render this.props.recipes.select where recipe_id matches and render that recipe information

  // will have to pass down allRecipes as props
  render(){
    return(
      <div>
        Tweak here!
        {(this.props.recipe.prev_recipe_id !== null) ? "True" : "False"}
      </div>
    )
  }
}
