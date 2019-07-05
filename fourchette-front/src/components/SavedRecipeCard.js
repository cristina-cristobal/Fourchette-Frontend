import React from 'react';
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const SavedRecipeCard = (props) => {
  return (
    <Link to={`/recipes/${props.recipe.recipe.id}`}>
    <div>
    <Card
    header={props.recipe.recipe.name}
    description={props.recipe.user.full_name}
    />
    </div>
    </Link>
  )
}

export default SavedRecipeCard
