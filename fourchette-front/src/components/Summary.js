import React, {Component} from 'react'
import {Grid, Image} from 'semantic-ui-react'

export default class Summary extends Component {
  render(){
    return(
      <div >
      <h1>{this.props.recipe.name}</h1>
      <Grid className="summary">
        <Grid.Column width={7}>
          <Image className="summary-img" src={this.props.recipe.image} />
        </Grid.Column>
        <Grid.Column width={9} >
          {this.props.recipe.intro}
          <br></br>
          <br></br>
          --{this.props.recipe.user.full_name}
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}
