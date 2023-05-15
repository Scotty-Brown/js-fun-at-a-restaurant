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
// first attempt -

// function addMenuItem(restName, item) {
//  if (item.type === 'breakfast' && !restName.menus.breakfast.includes(item) ){
//   restName.menus.breakfast.push(item)
//  } else if (item.type === "lunch" && !restName.menus.lunch.includes(item)){
//   restName.menus.lunch.push(item)
//  } else if (item.type === "dinner" && !restName.menus.dinner.includes(item)) {
//   restName.menus.dinner.push(item)
//  } 
// }

// Refactor attempt - 

//for addMenuItem to try and untilize bracket notation.
// I understand above that i listed out each key in the `item` argument 
// (i wont want to do this if there are a million billion keys in an object)
// when i could just loop through a specific key
// that matches a key in the `item` object argument to check if the item
// passed in the argument matches with an item thats already on the menu
// if so, nothing happens... if not, then we are going to push that item 
// into the menu

function addMenuItem(restName, item){
  for (var i = 0; i < restName.menus[item.type].length; i++){
   if (restName.menus[item.type][i].name === item.name) {
     return
   }
  } restName.menus[item.type].push(item)
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
// when i came back to refactor this function i noticed i already used
// bracket notation. Same concept as the addMenuItem function above this one.
// I could make some variables before the for loop to clean up the wording
// a bit in the if statement but i am not sure thats considered refactoring
// so i am just going to leave it as is.


//checkForFood
function checkForFood(restName, foodItem) {
  for (var i = 0; i < restName.menus[foodItem.type].length; i++) {
    if (restName.menus[foodItem.type][i].name === foodItem.name) {
      return `Yes, we're serving ${foodItem.name} today!`;
    }
  } return `Sorry, we aren't serving ${foodItem.name} today.`
}

// notes - same concept with bracket notation I used for the previous
// 2 functions.. this pulls a specific key from foodItem that it uses
// to loop through the menu with that exact key value and if they match
// then it takes the value from that .name and checks it with the arguments
// foodItem.name.. if they match, it returns one interpolated string.
// if they dont match.. it returns another

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}

// project reflection -
// it seemed that each progression step of this project threw a new
// `curve ball`. in the face of a challenge, i had to really exercise
// my self research, rubber ducking, and `asking for help` muscles.
// I do feel like i feel more confident in my self researching skills.
// at the beginning of my coding journey, I was not confident at all
// with the idea of researching on my own and being able to form 
// a working solution. I will say learning `splice()` and using it in my code
// as a result of self research and it worked, was a super happy moment
// i had during this project. I am much better at rubber ducking
// than i am at psuedocoding. I made a few attempts to psuedocode
// but i found it very distracting and i would often go off in 
// some form of random word imagery and would lose my train of thought.
//  It felt kind of chaotic. Joining study halls was very helpful 
// during the project too. Being able to talk back and forth
// with someone at your same learning level and figure things out
// is very rewarding. Lastly, i took a very slow and steady approach 
// to completing this project. When we first got it, I wanted to dig
// right in and start working until i finsihed it. However, I set aside
// a few hours a day over 5 days and worked piece by piece. At no point
// did i feel too overwhelmed or discouraged. I had a very positive
// attitude toward the project and the process of completing the project.