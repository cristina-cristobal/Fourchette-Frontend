import React, {Component} from 'react';
import RecipeCard from '../components/RecipeCard'
import { Card } from 'semantic-ui-react'

export default class CardContainer extends Component {
  render(){
    return(
      <div className="card-css">
      {this.props.recipes.map(recipe => < RecipeCard key={recipe.id} recipe={recipe}/>)}
      </div>
    )
  }
}






// <Card.Group itemsPerRow={4}>
//
// {this.props.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
// </Card.Group>
