import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'

export default class Steps extends Component {
  constructor(props){
    super(props)
    this.state = {
      toTweak: null,
      ingredients: props.recipe.ingredients.map(ingredient => ingredient.description),
      redirect: false
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
      },
      () => {this.props.addingTweak(this.state.toTweak)}
    )

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
  }

  // tweakRunner = (tweaking) => {
  //   debugger
  //   this.postTweak()
  //   this.setState({
  //     redirect: true
  //   })
  //   () => {this.props.addingTweak(tweaking)}
  // }


  render(){
    return(
      <div>
        {this.state.toTweak ?
          <Redirect to={`/recipes/${this.state.toTweak.id}/edit`} /> : null}
      Steps------------------------------
        {(this.props.recipe.steps) ? this.props.recipe.steps : null}
        ---------------------------------
        <div>
        <button onClick={(() => {this.postTweak()})}>Tweak</button>
        <button onClick={() => {this.props.like(this.props.recipe)}}>Save</button>
        </div>
      </div>
    )
  }
}
