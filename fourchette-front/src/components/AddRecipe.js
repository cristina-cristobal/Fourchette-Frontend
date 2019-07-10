import React, {Component} from 'react'
import {Form, TextArea} from 'semantic-ui-react'
import IngredientField from './IngredientField'

export default class AddRecipe extends Component {
  constructor(){
    super()
    this.state = {
      name: 'Testing Name',
      intro: '',
      steps: '',
      notes: '',
      ingredients: []

    }
  }

componentDidMount = () => {
  fetch('http://localhost:3000/recipes', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({recipe: ""})
  })
  }

  addIngredient = () => {
       console.log("adding ingredient here")
       fetch('http://localhost:3000/ingredients', {
         method: "POST",
         headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
         },
         body: JSON.stringify({
           ingredients: [""]
         })
       })
     }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <div>
      Add Recipe
      <Form>
        <div>
          <Form.Input
          label='Name'
          value={this.state.name}
          name='name'
          onChange={this.handleChange}
          />
        </div>

        <div>
          <Form.Input
          label='Introduction'
          value={this.state.intro}
          name='intro'
          onChange={this.handleChange}
          />
        </div>
        <b>Ingredients</b>
        {this.state.ingredients.map(ingredient => <IngredientField ingredient={ingredient}/>)}
        <button onClick={(() => {this.addIngredient()})}> Add Ingredient </button>
        <div>

        </div>

          <div>
            <Form.Input
            label='Steps'
            value={this.state.steps}
            name='steps'
            onChange={this.handleChange}
            />
          </div>

          <div>
            <Form.Input
            label='Special Instructions'
            value={this.state.notes}
            name='notes'
            onChange={this.handleChange}
            />
          </div>
          <br></br>
          <br></br>
          <div>
          <Form.Button>Submit</Form.Button>
          </div>
      </Form>
      </div>
    )
  }
}
