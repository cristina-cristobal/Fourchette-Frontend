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

    fetch('http://localhost:3000/likes')
      .then(res => res.json())
      .then(likes => {
        // console.log(likes.filter(like => like.user.id === 1 ))
        const userLikes = likes.filter(like => like.user.id === 1 )
        console.log(userLikes.map(like => like.recipe))
        this.setState({
          // currently only selects recipes for user at index 0. need to refactor
          mySavedRecipes: userLikes.map(like => like.recipe)
        })
      })

      fetch('http://localhost:3000/recipes')
        .then(res => res.json())
        .then(allRecipes => {
          this.setState({
            // currently only selects recipes for user at index 0. need to refactor
            myRecipes: allRecipes.filter(recipe => recipe.user_id === 1 && recipe.copy === false),
            myTweakedRecipes: allRecipes.filter(recipe => recipe.user_id === 1 && recipe.copy === true)
          })
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

  tweakPost = (e) => {
    console.log(e)
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
            <EditRecipe recipe={foundRecipe} tweakPost={this.tweakPost}/> : null
          )
        }}/>
          <Route exact path='/recipes/:id' render={(props) => {
            let recipeId = props.match.params.id
            let foundRecipe = this.state.allRecipes.find(r => r.id == recipeId)
            return( foundRecipe !== undefined ?
            <Recipe clickedRecipe={foundRecipe} allRecipes={this.state.allRecipes} like={this.like} /> : null
           )}} />
           <Route exact path='/profile' render={() => {return(<Profile myRecipes={this.state.myRecipes} myTweakedRecipes={this.state.myTweakedRecipes}/>)}} />
        <Route exact path='/' render={() => {return (<Home recipes={this.state.allRecipes} />)}} />
      </Switch>
    </div>
  )
}
}
