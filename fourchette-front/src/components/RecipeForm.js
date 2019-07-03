import React, {Component} from 'react'

export default class RecipeForm extends Component {
  render(){
    return(
      <div>
      Recipe Form
      Editing Recipe: {this.props.recipe.name}
        <form>
          {(this.props.recipe.ingredients) ? this.props.recipe.ingredients.map((ingredient) => <input placeholder={ingredient.description}></input>) : null}
        </form>
      </div>
    )
  }
}
