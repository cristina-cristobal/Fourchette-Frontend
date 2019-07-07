import React, {Component} from 'react'
import { Form } from 'semantic-ui-react'

export default class IngredientField extends Component{
  render(){
    return(
      <div>
        <Form.Field width={6}> <input value={this.props.ingredient.description}
        name='ingredients'
        data-id={this.props.ingredient.id}
        onChange={(event) => {this.props.handleIngredient(event, this.props.ingredient)}}/>
      </Form.Field>
      </div>
    )
  }
}
