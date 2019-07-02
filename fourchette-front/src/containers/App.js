import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js'
import Home from '../components/Home'
import Recipe from './Recipe'
import {Route, Switch} from 'react-router-dom'

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      allRecipes: [],
      clickedRecipe: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/recipes')
    .then(res => res.json())
    .then(recipesArray => this.setState({
      allRecipes: recipesArray
    }))
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
        <Route exact path='/recipes/:id' render={(props) => {
          let recipeId = props.match.params.id
          {console.log(this.state.allRecipes.find(r => r.id === 3))}
          return(
          <Recipe clickedRecipe={() => {this.state.allRecipes.find(r => r.id === recipeId)}} allRecipes={this.state.allRecipes}/>)}}/>
        <Route exact path='/' render={() => {return (<Home recipes={this.state.allRecipes} openRecipe={this.openRecipe}/>)}} />
      </Switch>
    </div>
  )
}
}
          //
          // <Recipe clickedRecipe={this.state.allRecipes.find(r => r.id === recipeId)} allRecipes={this.state.allRecipes}/>)}}/>
