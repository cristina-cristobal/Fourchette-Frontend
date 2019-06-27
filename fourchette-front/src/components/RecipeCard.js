import React from 'react';
import {Card, Image} from 'semantic-ui-react'

const RecipeCard = (props) => {
  return (
    <div>
      <Card onClick={() => {props.openRecipe(props.recipe)}}>
        <Card.Content>
        <Image size='medium' src={props.recipe.image} />
        <Card.Header>{props.recipe.name}</Card.Header>
        </Card.Content>
      </Card>
    </div>
  )
}

export default RecipeCard
