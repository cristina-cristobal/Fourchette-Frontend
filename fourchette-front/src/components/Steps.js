import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Steps extends Component {
  render(){

    return(
      <div>
      Steps------------------------------
        {(this.props.recipe.steps) ? this.props.recipe.steps : null}
        ---------------------------------
        <div>
        <Link to={`/recipes/${this.props.recipe.id}/edit`}>
        <button>Tweak</button>
        </Link>
        <button onClick={() => {this.props.like(this.props.recipe)}}>Save</button>
        </div>
      </div>
    )
  }
}
