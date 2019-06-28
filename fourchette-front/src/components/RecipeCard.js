import React from 'react';
import {Card, Image} from 'semantic-ui-react'

const RecipeCard = (props) => {
  return (
    <div>
      <Card onClick={() => {props.openRecipe(props.recipe)}}
      header={props.recipe.name}
      />
    </div>
  )
}

export default RecipeCard
