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

// define rolls
const original = new Product("Original", "Sugar Milk", "1", rolls["Original"].basePrice);
const walnut = new Product("Walnut", "Vanilla Milk", "12", rolls["Walnut"].basePrice);
const raisin = new Product("Raisin", "Sugar Milk", "3", rolls["Raisin"].basePrice);
const apple = new Product("Apple", "Keep Original", "3", rolls["Apple"].basePrice);

// add the pre-defined rolls to the cart
cart.push(original, walnut, raisin, apple);

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
    cartPrice = document.querySelector('.price');
    cartPrice.innerText = '$' + totalPrice;
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
    cartPrice = document.querySelector('.price');
    cartPrice.innerText = '$' + updateTotalPrice();
}
    