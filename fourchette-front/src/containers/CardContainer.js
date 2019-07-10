import React, {Component} from 'react';
import RecipeCard from '../components/RecipeCard'
import { Card } from 'semantic-ui-react'

export default class CardContainer extends Component {
  render(){
    return(
        <Card.Group itemsPerRow={3}>

        {this.props.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </Card.Group>
    )
  }
}
