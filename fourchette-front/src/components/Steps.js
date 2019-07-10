import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {Grid, Image, Button} from 'semantic-ui-react'

export default class Steps extends Component {
  constructor(props){
    super(props)
    this.state = {
      toTweak: null,
      ingredients: props.recipe.ingredients.map(ingredient => ingredient.description),
      redirect: false,
      saveClicked: false,
      ingAdded: null
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
      ingredients: this.state.ingredients
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

    //   fetch('http://localhost:3000/ingredients', {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       ingredients: this.state.ingredients,
    //       createdRecipe: newRecipe
    //     })
    //   })
    //   .then(res => res.json())
    //   .then(ings => {
    //     this.setState({
    //       toTweak: newRecipe,
    //       ingAdded: ings
    //     },
    //   )
    //   })

    }
  )
  }



  saveAndRedirect = (recipe) => {
    this.props.like(recipe)
    this.setState({
      saveClicked: true
    })
  }


  render(){
    return(
      <div>

      <Grid>
  <Grid.Row>
    <Grid.Column width={8}>
    <ul>
    {(this.props.recipe.ingredients) ? this.props.recipe.ingredients.map((ingredient) => <li key={ingredient.id}>{ingredient.description}</li>)  : null}
    </ul>

    </Grid.Column>
    <Grid.Column width={8}>

      {this.state.toTweak ?
        <Redirect to={`/recipes/${this.state.toTweak.id}/edit`} /> : null}
        <br></br>
        {(this.props.recipe.steps) ? this.props.recipe.steps : null}
        <br></br>
        <br></br>
        <div>
        <Button color="black" onClick={(() => {this.postTweak()})}>Tweak</Button>
        <Button color="black" onClick={() => {this.saveAndRedirect(this.props.recipe)}}>Save</Button>
        {this.state.saveClicked ? <Redirect to={'/profile'} /> : null}
        </div>

    </Grid.Column>
  </Grid.Row>
</Grid>











      </div>
    )
  }
}
