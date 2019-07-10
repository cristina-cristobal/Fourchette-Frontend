import React from 'react';
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const RecipeCard = (props) => {

  return (

    <Card
    header={props.recipe.name}
    description={props.recipe.user.full_name}
    as={Link} to={`/recipes/${props.recipe.id}`}
    />

  )
}

export default RecipeCard
