import React from 'react';
import {Link} from 'react-router-dom'

const SavedRecipeCard = (props) => {
  // console.log(props)
  return (
    <Link to={`/recipes/${props.recipe.id}`}>
    <div>
      <img className="cardimg" src={props.recipe.recipe.image}/>
      <div className="recipe-info">
        {props.recipe.recipe.name}
      </div>
    </div>
    </Link>
  )
}

export default SavedRecipeCard




// <Link to={`/recipes/${props.recipe.recipe.id}`}>
// <div>
// <Card
// header={props.recipe.recipe.name}
// />
// </div>
// </Link>
