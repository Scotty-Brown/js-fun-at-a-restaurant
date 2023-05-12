
// nameMenueItems
function nameMenuItem(name) {
  return `Delicious ${name}`
}

// createMenuItem
function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  }
}

// addIngredients
function addIngredients(item1, ingredients) {
  if (ingredients.includes(item1)) {
    return
  } else {
    return ingredients.push(item1)
  }
}

// formatPrice
function formatPrice(price) {
return "$" + price
}

// decreasePrice
function decreasePrice(price) {
return price - (price * .1)
}

// createRecipe
function createRecipe(title, ingredients, type) {
  return recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
}
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


