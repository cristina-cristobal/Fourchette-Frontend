import React, {Component} from 'react';
import CardContainer from '../containers/CardContainer'

export default class Home extends Component {
  render(){
    return(
      <div className="home">
        <CardContainer recipes={this.props.recipes}  like={this.props.like}/>
      </div>
    )
  }
}
