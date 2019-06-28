import React from 'react';
// import {Card, Image} from 'semantic-ui-react'

const RecipeCard = (props) => {
  return (
    <div onClick={() => {props.openRecipe(props.recipe)}}>
    {props.recipe.name}
    </div>
  )
}

export default RecipeCard
