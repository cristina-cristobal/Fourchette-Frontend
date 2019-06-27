import React, {Component} from 'react';
import CardContainer from '../containers/CardContainer'

export default class Home extends Component {
  render(){
    return(
      <div>
        Homepage goes here
        <CardContainer recipes={this.props.recipes} openRecipe={this.props.openRecipe}/>
      </div>
    )
  }
}
