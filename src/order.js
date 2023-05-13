// takeOrder
function takeOrder(order1, orders) {
 if (orders.length <= 2) {
  orders.push(order1)
 } else {}
}

// refundOrder
function refundOrder(orderNumber, orders) {
for ( var i = 0; i < orders.length; i++) {
  if (orders[i].orderNumber === orderNumber) {
    orders.splice(i, 1)
    break;
  } 
}
}

//listItems
function listItems (orders) {
  var whatever = []
 for (var i = 0; i < orders.length; i++) {
   whatever.push(orders[i].item)
 } 
 return whatever.join(', ')
}

//searchOrder
function searchOrder(orders, itemBeingSearchedFor) {
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].item === itemBeingSearchedFor) {
      return true
    }
  } return false
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}