import React, {Component} from 'react'

export default class Steps extends Component {
  render(){
    return(
      <div>
      Steps------------------------------
        {(this.props.recipe.steps) ? this.props.recipe.steps : null}
        ---------------------------------
        <div>
        <button>Tweak</button>
        <button onClick={() => {this.props.like(this.props.recipe)}}>Save</button>
        </div>
      </div>
    )
  }
}
