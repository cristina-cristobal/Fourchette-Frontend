import React, {Component} from 'react'
import RecipeForm from '../components/RecipeForm'
import EditBar from '../components/EditBar'

export default class EditRecipe extends Component {
  render(){
    return(
      <div>
        Edit Recipe Pg
        <EditBar />
        <RecipeForm />
      </div>
    )
  }
}
