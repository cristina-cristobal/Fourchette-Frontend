import React, {Component} from 'react'
import { Button, Checkbox, Form, TextArea, Text } from 'semantic-ui-react'

export default class RecipeForm extends Component {
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
            />
          </div>
          <br></br>
          <div>
            <Form.Field
            placeholder={this.props.recipe.intro}
            control={TextArea}
            label='Introduction. Tell us about your recipe. What did you tweak? What did you serve it with?'
            width={10}
            />
          </div>

            <br></br>

          <div>
            <b>Ingredients</b>
              {(this.props.recipe.ingredients) ? this.props.recipe.ingredients.map((ingredient) => <div>
                <Form.Field width={6}> <input placeholder={ingredient.description}/></Form.Field></div>) : null}
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
            />
          </div>
          <br></br>
          <div>
          <Form.Button>Submit</Form.Button>
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
