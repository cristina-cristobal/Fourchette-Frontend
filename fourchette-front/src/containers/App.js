import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js'
import Home from '../components/Home'

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
      <Home recipes={this.state.allRecipes} openRecipe={this.openRecipe}/>
    </div>
  )
}
}
