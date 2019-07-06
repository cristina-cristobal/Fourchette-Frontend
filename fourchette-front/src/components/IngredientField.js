import React, {Component} from 'react'
import { Form } from 'semantic-ui-react'

export default class IngredientField extends Component{
  render(){
    return(
      <div>
        <Form.Field width={6}> <input value={this.props.ingredient.description}
        name='ingredients'
        onChange={(event) => {this.props.handleIngredient(event, this.props.ingredient)}}/>
      </Form.Field>
      </div>
    )
  }
}
