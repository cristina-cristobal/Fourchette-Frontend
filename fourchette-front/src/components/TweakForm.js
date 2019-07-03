import React, {Component} from 'react'
import { Button, Checkbox, Form, TextArea, Text } from 'semantic-ui-react'

export default class TweakForm extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      intro: '',
      steps: '',
      notes: '',
      ingredients: []
    }
  }

  handleChange = (event) => {
    console.log("event.target.name:", event.target.name, ". event.target.value:", event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleIngredients = (event) => {
    console.log('event.target.name', event.target.name, ". event.target.value", event.target.value)
    this.setState({
      // currently this will add each new character on change to state... need to only push finalized value
      ingredients: [...this.state.ingredients, event.target.value]
    })
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
            placeholder={this.props.recipe.name}
            width={10}
            name='name'
            onChange={(event) => {this.handleChange(event)}}
            />
          </div>
          <br></br>
          <div>
            <Form.Field
            placeholder={this.props.recipe.intro}
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
              {(this.props.recipe.ingredients) ? this.props.recipe.ingredients.map((ingredient) => <div>
                <Form.Field width={6}> <input placeholder={ingredient.description}
                name='ingredients'
                onChange={(event) => (this.handleIngredients(event))}/></Form.Field></div>) : null}
              <button>Add Ingredient</button>
          </div>
            <br></br>
          <div>
            {(this.props.recipe.steps) ? (<Form.Field
                control={TextArea}
                label='Steps'
                placeholder={this.props.recipe.steps}
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
            placeholder={this.props.recipe.notes}
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

//
// {(this.props.recipe.intro === null) ?
//
//     <Form.Field
//     placeholder='Place intro here'
//     control={TextArea}
//     label='Introduction: Tell us about your recipe. What did you Tweak? What '
//     />
//   :
//   <Form.Field
//   placeholder={this.props.recipe.intro}
//   control={TextArea}
//   label='Intro'
//   />
// }
