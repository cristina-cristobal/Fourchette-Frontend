import React, {Component} from 'react'

export default class Summary extends Component {
  render(){
    return(
      <div>
      <h1>{this.props.recipe.name}</h1>
        <br></br>
        <br></br>
      Summary----------------------------
      {this.props.recipe.intro}
      -----------------------------------
      </div>
    )
  }
}
