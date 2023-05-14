// createRestaurant

  function createRestaurant (restName) {
    return {
      name: restName,
      menus: {
        breakfast: [],
        lunch: [],
        dinner: []
      }
    }
}

// addMenuItem

function addMenuItem(restName, item) {
 if (item.type === 'breakfast' && !restName.menus.breakfast.includes(item) ){
  restName.menus.breakfast.push(item)
 } else if (item.type === "lunch" && !restName.menus.lunch.includes(item)){
  restName.menus.lunch.push(item)
 } else if (item.type === "dinner" && !restName.menus.dinner.includes(item)) {
  restName.menus.dinner.push(item)
 } 
}

// removeMenuItem

  function removeMenuItem(restName, itemtoRemove, type) {
    for (var i = 0; i < restName.menus[type].length; i++) {
      if (restName.menus[type][i].name === itemtoRemove) {
        restName.menus[type].splice(i, 1)
       return `No one is eating our ${itemtoRemove} - it has been removed from the ${type} menu!`
      }
    } 
    return `Sorry, we don't sell ${itemtoRemove}, try adding a new recipe!`
}

//checkForFood
function checkForFood(restName, foodItem) {
  for (var i = 0; i < restName.menus[foodItem.type].length; i++) {
    if (restName.menus[foodItem.type][i].name === foodItem.name) {
      return `Yes, we're serving ${foodItem.name} today!`;
    }
  } return `Sorry, we aren't serving ${foodItem.name} today.`
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}