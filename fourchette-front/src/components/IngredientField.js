import React, {Component} from 'react'
import { Button, Checkbox, Form, TextArea, Text } from 'semantic-ui-react'

export default class IngredientField extends Component{
  render(){
    return(
      <div>
        <Form.Field width={6}> <input placeholder={this.props.ingredient.description}
        name='ingredients'
        onChange={(event) => {this.props.handleIngredient(event)}}/>
      </Form.Field>
      </div>
    )
  }
}
