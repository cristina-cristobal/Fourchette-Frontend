import React, {Component} from 'react';
import RecipeCard from '../components/RecipeCard'
import { Card } from 'semantic-ui-react'

export default class CardContainer extends Component {
  render(){
    return(
        <Card.Group itemsPerRow={4}>

        {this.props.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </Card.Group>
    )
  }
}


// header={props.recipe.name}
// description={props.recipe.user.full_name}
// as={Link} to={`/recipes/${props.recipe.id}`}
// image={props.recipe.image}
