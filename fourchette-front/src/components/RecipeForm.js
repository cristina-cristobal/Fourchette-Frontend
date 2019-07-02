import React, {Component} from 'react'

export default class RecipeForm extends Component {
  render(){
    return(
      <div>
      Recipe Form
      Editing Recipe: {this.props.recipe.name}
        <form>
        </form>
      </div>
    )
  }
}
