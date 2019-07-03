import React from 'react';
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const RecipeCard = (props) => {
  return (
    <Link to={`/recipes/${props.recipe.id}`}>
    <div onClick={() => {props.openRecipe(props.recipe)}}>
    <Card
    header={props.recipe.name}
    description={props.recipe.user.full_name}/>
    </div>
    </Link>
  )
}

export default RecipeCard
