postTweak = () => {

  let recipeCopy = {
    name: this.props.recipe.name,
    image: this.props.recipe.image,
    user_id: 1,
    copy: true,
    prev_recipe_id: this.props.recipe.id,
    intro: this.props.recipe.intro,
    notes: this.props.recipe.notes,
    steps: this.props.recipe.steps,
  }

  let ingredientList = {
    ingredients: this.state.ingredients
  }

  fetch('http://localhost:3000/recipes', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(recipeCopy)
  })

  .then(res => res.json())
  .then(newRecipe => {
    this.setState({
      toTweak: newRecipe
    })

  }
)
  fetch('http://localhost:3000/ingredients', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      ingredients: this.state.ingredients
    })
  })
}
