import React from 'react';
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const SavedRecipeCard = (props) => {
  return (
    <div>
  { props.recipe.recipe.id ?
    <Link to={`/recipes/${props.recipe.recipe.id}`}>
    <div>
    <Card
    header={props.recipe.recipe.name}
    description={props.recipe.user.full_name}
    />
    </div>
    </Link> : null}
    </div>
  )
}

export default SavedRecipeCard
