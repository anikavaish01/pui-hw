// dictionary to hold roll options (i.e., glazing and pack size)
const ROLLS = {
    glazing: {
        'Keep Original': 0,
        'Sugar Milk': 0,
        'Vanilla Milk': 0.5,
        'Double Chocolate': 1.5
    },
    packSize: {
        '1': 1,
        '3': 3,
        '6': 5,
        '12': 10
    }
}

// define a product class
class Product{
    constructor(rollType, rollGlazing, packSize, basePrice){
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// define an empty cart array
let cart = [];
let totalPrice = 0;
let cartPrice = document.querySelector('.price');
cartPrice.innerText = '$' + updateTotalPrice();

// conditonal statement to check whether there are items stored in local storage
if (sessionStorage.getItem('storedRolls') != null) {
    retrieveFromLocalStorage(); 
}


// iterate over the contents of the cart to calculate the price of the roll and create a new roll element within html
for (const c of cart){
    c.calculatedPrice = calculatePrice(c.basePrice, ROLLS.glazing[c.glazing], ROLLS.packSize[c.size]);
    createRoll(c);
}

// compute the final roll price based on cart products
function calculatePrice(basePrice, glazing, size){
    this.finalPrice = ((basePrice + glazing) * size).toFixed(2);
    return finalPrice;
}

// define a function to create a new roll element within html
function createRoll(roll){

    // from PUI: Lab 5
    const template = document.querySelector('#cart-products');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.cart');

    // define an addEventListener that removes a cart item on click
    const removeButton = roll.element.querySelector('.remove-item-text');
    removeButton.addEventListener('click', () => {
        removeItem(roll);
      });

    // append the roll element to the cart-wrapper div
    const cartProduct = document.querySelector('.cart-wrapper');
    cartProduct.appendChild(roll.element);

    updateRoll(roll);
}

// define a function to populate the html with the corresponding roll image, roll type, pack size, and price
function updateRoll(roll){
    const rollTitle = roll.element.querySelector('.cart-product-title');
    rollTitle.innerText = roll.type + " Cinnamon Roll";

    const rollGlazing = roll.element.querySelector('.cart-product-glazing');
    rollGlazing.innerText = "Glazing: " + roll.glazing;

    const rollSize = roll.element.querySelector('.cart-product-size')
    rollSize.innerText = "Pack Size: " + roll.size;

    const rollImage = roll.element.querySelector('.cart-image');
    rollImage.src = "../assets/products/" + rolls[roll.type].imageFile;

    const rollPrice = roll.element.querySelector('.cart-price');
    rollPrice.innerText = '$' + roll.calculatedPrice;
    
    calculateTotalPrice(roll);

}

// define a function to calculate the total cart price
function calculateTotalPrice(roll){
    totalPrice += parseFloat(roll.calculatedPrice);
    cartPrice.innerText = '$' + totalPrice.toFixed(2);
}

// define a function to calculate the updated price
function updateTotalPrice() {
    let total = 0;
    for (const c of cart) {
        total += parseFloat(c.calculatedPrice);
    }

    return total.toFixed(2);
}

// define function to remove roll and update total price accordingly
function removeItem(roll){
    roll.element.remove();
    cart.splice(cart.indexOf(roll), 1);
    cartPrice.innerText = '$' + updateTotalPrice();

    // call 'saveToLocalStorage' function to update the cart array items in local storage
    saveToLocalStorage();
}

// define 'saveToLocalStorage' function
function saveToLocalStorage() {
    // from PUI: Lab 6
    const rollArray = Array.from(cart);
    const rollArrayString = JSON.stringify(rollArray);
    console.log(rollArrayString);
  
    sessionStorage.setItem('storedRolls', rollArrayString);
}

// define 'retrieveFromLocalStorage' function
function retrieveFromLocalStorage() {
    // from PUI: Lab 6
    const rollArrayString = sessionStorage.getItem('storedRolls');
    const rollArray = JSON.parse(rollArrayString);
    console.log(rollArrayString);

    // append 'added-to-cart' items into the cart array
    for (const r of rollArray) {
      cart.push(r);
    }
}

    