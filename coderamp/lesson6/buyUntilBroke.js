
// buyUntilBroke returns the quantity of items that a user can buy
// amountInWallet: users start with amountInWallet USD
// costOfItem: each item costs costOfItem
function buyUntilBroke(costOfItem, amountInWallet) {
  // use a while loop
  
  // set variables that track how many products have been bought / how much has been spent

  // create a loop that buys the item repeatedly

  // return the total quantity purchased
}


function buyUntilBroke(costOfItem, amountInWallet) {
  // use a while loop

  // set variables that track how many products have been bought / how much has been spent
  let productsBought = 0;
  let amountSpent = 0;

  // create a loop that buys the item repeatedly
  while (amountSpent < amountInWallet){
    amountSpent = amountSpent + costOfItem;
    productsBought++;
  }

  // return the total quantity purchased
  return productsBought;
}
