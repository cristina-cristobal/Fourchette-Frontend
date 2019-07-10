import React, {Component} from 'react'

export default class Ingredients extends Component {
  render(){
    return(
      <div>
      Ingredients ------------------
        <ul>
        {(this.props.recipe.ingredients) ? this.props.recipe.ingredients.map((ingredient) => <li key={ingredient.id}>{ingredient.description}</li>)  : null}
        </ul>
        _________________________
      </div>
    )
  }
}
