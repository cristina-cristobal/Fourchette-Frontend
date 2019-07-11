import React from 'react';
import {Link} from 'react-router-dom'


const RecipeCard = (props) => {

  return (
    <Link to={`/recipes/${props.recipe.id}`}>
    <div>
        <img className="cardimg" src={props.recipe.image}></img>
        <div className="recipe-info">
          <div className="name-font">
            {props.recipe.name}
          </div>
          <div className="author-name">
            {props.recipe.user.full_name}
          </div>
      </div>
    </div>
    </Link>

  )
}

export default RecipeCard







// <Card as={Link} to={`/recipes/${props.recipe.id}`}>
// <Card.Content>
// <img className="cardimg" src={props.recipe.image}/>
// <Card.Header>{props.recipe.name}</Card.Header>
// <Card.Description>{props.recipe.user.full_name}</Card.Description>
// </Card.Content>
// </Card>
