import React, {Component} from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import IngredientField from './IngredientField'
import {Redirect} from 'react-router-dom'

export default class TweakForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: props.recipe.id,
      name: props.recipe.name,
      intro: props.recipe.intro,
      steps: props.recipe.steps,
      notes: props.recipe.notes,
      ingredients: props.recipe.ingredients,
      submitClicked: false,
      image: props.recipe.image,
      updatedRecipe: null
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleIngredients = (event, ingre) => {
    let ingCopy = [...this.state.ingredients]

    let ingIndex = this.state.ingredients.findIndex(ing => ing.id == event.target.dataset.id)

    let foundIng = this.state.ingredients[ingIndex]

    foundIng.description = event.target.value

    ingCopy.splice(ingIndex, 1, foundIng)

    this.setState({
      ingredients: ingCopy,
    })
  }

  patchRecipe = () => {
    let patchedRecipe = {
      id: this.state.id,
      name: this.state.name,
      intro: this.state.intro,
      steps: this.state.steps,
      notes: this.state.notes,
      user_id: 1,
      prev_recipe_id: this.props.recipe.id,
      image: this.state.image
    }

    fetch(`http://localhost:3000/recipes/${this.state.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(patchedRecipe)
    })
    .then(res => res.json())
    .then(adaptedRecipe => {this.setState({
      updatedRecipe: adaptedRecipe,
      submitClicked: true

    })})

  }

  render(){
    return(
      <div>
      Recipe Form
      Editing Recipe: {this.props.recipe.name}
      <br></br>
      <br></br>
        <Form>
          <div>
            <Form.Input
            label='Name'
            value={this.state.name}
            width={10}
            name='name'
            onChange={(event) => {this.handleChange(event)}}
            />
          </div>
          <br></br>
          <div>
            <Form.Field
            value={this.state.intro}
            control={TextArea}
            label='Introduction. Tell us about your recipe. What did you tweak? What did you serve it with?'
            width={10}
            name='intro'
            onChange={(event) => {this.handleChange(event)}}
            />
          </div>

            <br></br>
          <div>
          <b>Ingredients</b>
          {
            this.state.ingredients.map(ingredient => <IngredientField key={ingredient.id} ingredient={ingredient} handleIngredient={this.handleIngredients}/>)
          }
          </div>

            <br></br>
          <div>
            {(this.props.recipe.steps) ? (<Form.Field
                control={TextArea}
                label='Steps'
                value={this.state.steps}
                width={10}
                rows={12}
                name='steps'
                onChange={(event) => {this.handleChange(event)}}
              /> )
              : null }
          </div>
          <br></br>
          <div>
            <Form.Field
            value={this.state.notes}
            control={TextArea}
            label='Special Instructions (e.g., substitution ideas, tips on a tricky part of the recipe)'
            width={10}
            name='notes'
            onChange={(event) => {this.handleChange(event)}}
            />
          </div>
          <br></br>
          <div>
          <Form.Button onClick={this.patchRecipe}>Submit</Form.Button>
          </div>
        </Form>
        {this.state.submitClicked && this.state.updatedRecipe ?
          <Redirect to={`/recipes/${this.state.id + 1}`} /> : null
        }
      </div>
    )
  }
}
