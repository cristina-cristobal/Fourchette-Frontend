import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Steps extends Component {
  constructor(props){
    super(props)
    this.state = {
      toTweak: [],
      ingredients: props.recipe.ingredients.map(ingredient => ingredient.description),
    }
  }

  postTweak = () => {

    let recipeCopy = {
      name: this.props.recipe.name,
      image: this.props.recipe.image,
      user_id: 1,
      copy: true,
      prev_recipe_id: this.props.recipe.id,
      intro: this.props.recipe.intro,
      notes: this.props.recipe.notes,
      steps: this.props.recipe.steps,
    }

    let ingredientList = {
      ingredients: this.state.ingredients
    }

    fetch('http://localhost:3000/recipes', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(recipeCopy)
    })

    .then(res => res.json())
    .then(newRecipe => {
      this.setState({
        toTweak: newRecipe
      })

      fetch('http://localhost:3000/ingredients', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ingredients: this.state.ingredients,
          createdRecipe: newRecipe
        })
      })

    }

  )


    console.log('posting now')

  }

  render(){
    return(
      <div>
      {console.log(this.props.recipe.name)}
      Steps------------------------------
        {(this.props.recipe.steps) ? this.props.recipe.steps : null}
        ---------------------------------
        <div>
        {/*<Link to={`/recipes/${this.state.toTweak.id}/edit`}>*/}
        <button onClick={(() => {this.postTweak()})}>Tweak</button>
        {/*</Link>*/}
        <button onClick={() => {this.props.like(this.props.recipe)}}>Save</button>
        </div>
      </div>
    )
  }
}
