import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Steps extends Component {
  constructor(props){
    super(props)
    this.state = {
      toTweak: []
    }
  }

  postTweak = () => {
    console.log('posting now')

    let recipeCopy = {
      name: this.props.recipe.name,
      image: this.props.recipe.image,
      user_id: 1,
      copy: true,
      prev_recipe_id: this.props.recipe.id,
      intro: this.props.recipe.intro,
      notes: this.props.recipe.notes,
      steps: this.props.recipe.steps
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
    })



  }

  render(){

    return(
      <div>
      {console.log(this.props.recipe.name)}
      Steps------------------------------
        {(this.props.recipe.steps) ? this.props.recipe.steps : null}
        ---------------------------------
        <div>
        <Link to={`/recipes/${this.props.recipe.id}/edit`}>
        <button onClick={(() => {this.postTweak()})}>Tweak</button>
        </Link>
        <button onClick={() => {this.props.like(this.props.recipe)}}>Save</button>
        </div>
      </div>
    )
  }
}
