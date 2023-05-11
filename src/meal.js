
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
 ingredients.push(item1)
}
// Working notes // - I didnt include return because we are only needing to put the item in the array.


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


