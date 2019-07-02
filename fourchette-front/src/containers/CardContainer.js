import React, {Component} from 'react';
import RecipeCard from '../components/RecipeCard'
import { Card } from 'semantic-ui-react'

export default class CardContainer extends Component {
  render(){
    return(
      <div>
        <Card.Group itemsPerRow={4}>
        {this.props.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} openRecipe={this.props.openRecipe}/>)}
        </Card.Group>
      </div>
    )
  }
}
