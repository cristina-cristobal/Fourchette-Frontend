import React from 'react';
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const SavedRecipeCard = (props) => {
  // console.log(props)
  return (
    <div>
        <Link to={`/recipes/${props.recipe.recipe.id}`}>
        <div>
        <Card
        header={props.recipe.recipe.name}
        description={props.recipe.user.full_name}
        />
        </div>
        </Link>
        </div>
  )
}

export default SavedRecipeCard
