import React, {Component} from 'react'
import { Button, Checkbox, Form, TextArea, Text } from 'semantic-ui-react'
import IngredientField from './IngredientField'

export default class TweakForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.recipe.name,
      intro: props.recipe.intro,
      steps: props.recipe.steps,
      notes: props.recipe.notes,
      ingredients: props.recipe.ingredients
    }
  }

  handleChange = (event) => {
    console.log("event.target.name:", event.target.name, ". event.target.value:", event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }




  handleIngredients = (event, ingredient) => {
    console.log(event.target.value)
    // this.setState({
    //   // currently this will add each new character on change to state... need to only push finalized value
    //   // ingredients: [...this.state.ingredients, event.target.value]
    //   // ingredients: [...this.state.ingredients.find(ing => {ing.id === ingredient.id})]
    //   ingredients: copyOfIngredeitnsWithOneIngredientChanged
    //
    // })
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
          <Form.Button onClick={this.props.tweakPost}>Submit</Form.Button>
          </div>
        </Form>
      </div>
    )
  }
}



// <div>
// <b>Ingredients</b>
// {(this.props.recipe.ingredients) ? this.props.recipe.ingredients.map((ingredient) => <div>
//   <Form.Field width={6}> <input placeholder={ingredient.description}
//   name='ingredients'
//   key={ingredient.id}
//   onChange={(event) =>  {
//     (this.handleIngredients(event))}} /></Form.Field></div>) : null}
//     <button>Add Ingredient</button>
//     </div>
