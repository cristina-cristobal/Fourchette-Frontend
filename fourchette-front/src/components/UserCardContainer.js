import React, {Component} from 'react'
import RecipeCard from './RecipeCard'
import { Tab } from 'semantic-ui-react'
import CardTest from './CardTest'
import SavedRecipeCard from './SavedRecipeCard'

export default class UserCardContainer extends Component {
  render(){
    const panes = [
      { menuItem: 'Saved Recipes', render: () => <Tab.Pane>
        <div className="card-css">
          {this.props.mySavedRecipes.map((recipe) => <SavedRecipeCard recipe={recipe} key={recipe.id} newlySaved={this.props.newlySaved}/>)}
        </div>
      </Tab.Pane> },
      { menuItem: 'Tweaked Recipes', render: () => <Tab.Pane>
        <div className="card-css">
          {this.props.myTweakedRecipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.id}/>)}
        </div>
      </Tab.Pane> },
      { menuItem: 'Created Recipes', render: () => <Tab.Pane> {this.props.myRecipes.map((recipe) => <RecipeCard recipe={recipe} key={recipe.id}/>)} </Tab.Pane> },
    ]
    return(
      <div>
      <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
      </div>
    )
  }
}
