import React, {Component} from 'react'
import RecipeCard from './RecipeCard'
import { Tab } from 'semantic-ui-react'
import CardTest from './CardTest'

export default class UserCardContainer extends Component {
  render(){
    const panes = [
      { menuItem: 'Saved Recipes', render: () => <Tab.Pane>  </Tab.Pane> },
      { menuItem: 'Tweaked Recipes', render: () => <Tab.Pane>
      {this.props.myTweakedRecipes.map(recipe => <RecipeCard recipe={recipe}/>)}
      </Tab.Pane> },
      { menuItem: 'Created Recipes', render: () => <Tab.Pane> {this.props.myRecipes.map((recipe) => <RecipeCard recipe={recipe}/>)} </Tab.Pane> },
    ]
    return(
      <div>
      <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
      </div>
    )
  }
}
