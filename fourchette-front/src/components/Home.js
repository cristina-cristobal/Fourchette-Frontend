import React, {Component} from 'react';
import CardContainer from '../containers/CardContainer'

export default class Home extends Component {
  render(){
    return(
      <div>
        <CardContainer recipes={this.props.recipes} openRecipe={this.props.openRecipe} like={this.props.like}/>
      </div>
    )
  }
}
