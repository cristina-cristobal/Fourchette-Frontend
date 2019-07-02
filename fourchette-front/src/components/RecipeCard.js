import React from 'react';
import {Card, Image} from 'semantic-ui-react'

const RecipeCard = (props) => {
  return (
    <div onClick={() => {props.openRecipe(props.recipe)}}>
    <Card 
    header={props.recipe.name}
    description={props.recipe.user_id}/>
    </div>
  )
}

export default RecipeCard
