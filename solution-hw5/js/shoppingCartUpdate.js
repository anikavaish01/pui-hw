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

const original = new Product("Original", "Sugar Milk", "1", rolls["Original"].basePrice);
const walnut = new Product("Walnut", "Vanilla Milk", "12", rolls["Walnut"].basePrice);
const raisin = new Product("Raisin", "Sugar Milk", "3", rolls["Raisin"].basePrice);
const apple = new Product("Apple", "Keep Original", "3", rolls["Apple"].basePrice);

cart.push(original, walnut, raisin, apple);
for (const c of cart){
    c.calculatedPrice = calculatePrice(c.basePrice, ROLLS.glazing[c.glazing], ROLLS.packSize[c.size]);
    console.log(c);
}

console.log(cart);

// compute the final roll price based on user selections
function calculatePrice(basePrice, glazing, size){
    this.finalPrice = ((basePrice + glazing) * size).toFixed(2);
    return finalPrice;
}

for (const c of cart){
    createRoll(c);
    console.log(c);
}

function createRoll(roll){
    const template = document.querySelector('#cart-products');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.cart');

    const removeButton = roll.element.querySelector('.remove-item-text');
    removeButton.addEventListener('click', () => {
        removeItem(roll);
      });

    const cartProduct = document.querySelector('.cart-wrapper');
    cartProduct.appendChild(roll.element);

    updateRoll(roll);
}

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
    
    updatePrice(roll); 

}

function updatePrice(roll){
    totalPrice += parseFloat(roll.calculatedPrice);
    cartPrice = document.querySelector('.price');
    cartPrice.innerText = '$' + totalPrice;
}

function calculateTotalPrice() {
    let total = 0;
    for (const c of cart) {
        total += parseFloat(c.calculatedPrice);
    }

    return total.toFixed(2);
}


function removeItem(roll){
    roll.element.remove();
    cart.splice(cart.indexOf(roll), 1);
    cartPrice = document.querySelector('.price');
    cartPrice.innerText = '$' + calculateTotalPrice();
}
    