import React from 'react';
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const RecipeCard = (props) => {

  return (

    <Card as={Link} to={`/recipes/${props.recipe.id}`}>
      <Card.Content>
        <img className="cardimg" src={props.recipe.image}/>
        <Card.Header>{props.recipe.name}</Card.Header>
        <Card.Description>{props.recipe.user.full_name}</Card.Description>
      </Card.Content>
    </Card>

  )
}

export default RecipeCard
