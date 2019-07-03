import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js'
import Home from '../components/Home'
import Recipe from './Recipe'
import {Route, Switch} from 'react-router-dom'
import Profile from './Profile'
import EditRecipe from './EditRecipe'

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      allRecipes: [],
      clickedRecipe: [],
      mySavedRecipes: [],
      myTweakedRecipes: [],
      myRecipes: [],

    }
  }

  componentDidMount(){

    fetch('http://localhost:3000/recipes')
    .then(res => res.json())
    .then(recipesArray => this.setState({
      allRecipes: recipesArray
    }))

    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(user => {
        this.setState({
          // currently only selects recipes for user at index 0. need to refactor
          mySavedRecipes: user[0].recipes
        })
      })

  }

  tweakingRecipe = (recipe) => {
    this.setState({
      tweaking: [...this.state.tweaking, recipe]
    })
  }

  like = (recipe) => {
    let saveRecipe = {
      // update user ID when you figure out how to work with different users/sessions
      user_id: 1,
      recipe_id: recipe.id
    }

    fetch('http://localhost:3000/likes', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(saveRecipe)
    })
      .then(res => res.json())
      .then(newlySaved => { this.setState({
        mySavedRecipes: [...this.state.mySavedRecipes, recipe]
      })
      })

  }

  openRecipe = (dish) => {
    this.setState({
      clickedRecipe: dish
    })
  }

  render(){
  return (
    <div>
      <Navbar />
      <Switch>

      <Route exact path='/recipes/:id/edit' render={(props) => {
        let recipeId = props.match.params.id
        let foundRecipe = this.state.allRecipes.find(r => r.id == recipeId)
          return ( foundRecipe !== undefined ?
            <EditRecipe recipe={foundRecipe}/> : null
          )
        }}/>
          <Route exact path='/recipes/:id' render={(props) => {
            let recipeId = props.match.params.id
            let foundRecipe = this.state.allRecipes.find(r => r.id == recipeId)
            return( foundRecipe !== undefined ?
            <Recipe clickedRecipe={foundRecipe} allRecipes={this.state.allRecipes} like={this.like} tweakingRecipe={this.tweakingRecipe}/> : null
           )}} />
        <Route exact path='/' render={() => {return (<Home recipes={this.state.allRecipes} openRecipe={this.openRecipe}/>)}} />
      </Switch>
    </div>
  )
}
}
// <Route exact path='/users/:id' render={() => {return(<Profile /> ) }} />
          //
          // <Recipe clickedRecipe={this.state.allRecipes.find(r => r.id === recipeId)} allRecipes={this.state.allRecipes}/>)}}/>


          // <Route exact path='/recipes/:id' render={(props) => {
          //   let recipeId = props.match.params.id
          //   return( (this.state.allRecipes.find(r => r.id === recipeId)) != undefined) ?
          //
          //   <Recipe clickedRecipe={this.state.allRecipes.find(r => r.id === recipeId)} allRecipes={this.state.allRecipes}/> : null
          // )}}
          //
          // />
