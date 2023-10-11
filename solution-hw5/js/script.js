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

// define variables to store the current glazing option and pack size
let selectedGlazing = "Keep Original";
let selectedPackSize = "1";

// ** from HW4 document -- retrieving information from 'rollsData.js' file
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// define updated roll information including name, base price, and image src
let rollTitle = rollType + " Cinnamon Roll";
let rollPrice = rolls[rollType].basePrice;
let rollImage = rolls[rollType].imageFile;

// append / replace roll information in html
document.querySelector('#product-title').textContent = rollTitle;
document.querySelector('#product-image').src = '../assets/products/' + rollImage;
document.querySelector('.product-detail-price').textContent = '$' + rollPrice;

// create a new instance of the 'Product' class
const product = new Product(rollTitle, ROLLS.glazing["Keep Original"], ROLLS.packSize["1"], rollPrice);

// define an addEventListener that triggers the console print out when the user clicks on the add-to-cart button
const addToCart = document.querySelector('#add-to-cart-button');
addToCart.addEventListener('click', updateConsole);

// define the 'updateConsole' function that creates a new instance of the 'Product' class with updated product information
// and appends it into the cart array
function updateConsole(){
    cart.push(new Product(rollTitle, selectedGlazing, selectedPackSize, rollPrice));
    console.log(cart);
}

// retrieve the glazing dropdown from html
const glazingDropdown = document.querySelector('#glazing');
// define a function that populates the glazing dropdown in html with the glazing option elements
for (const o of Object.keys(ROLLS.glazing)){
    const option = document.createElement('option');
    option.textContent = o;
    option.value = ROLLS.glazing[o];

    glazingDropdown.appendChild(option);
}

// retrieve the pack size dropdown from html
const packSizeDropdown = document.querySelector('#pack-size');
// define a function that populates the pack size dropdown in html with the pack size option elements 
for (const o of Object.keys(ROLLS.packSize)){
    const option = document.createElement('option');
    option.textContent = o;
    option.value = ROLLS.packSize[o];

    packSizeDropdown.appendChild(option);
}

// define a function to update the glazing option based on user selection
glazingDropdown.addEventListener('change', updateGlazing)
function updateGlazing(event){
    const glazing = parseFloat(event.target.value);
    product.glazing = glazing;

    // from StackOverflow: access option text within a dropdown menu, as opposed to option value
    selectedGlazing = glazingDropdown.options[glazingDropdown.selectedIndex].text;

    calculatePrice();
}

// define a function to update the pack size value based on user selection
packSizeDropdown.addEventListener('change', updatePackSize)
function updatePackSize(event){
    const packSize = parseFloat(event.target.value);
    product.size = packSize;

    // from StackOverflow: access option text within a dropdown menu, as opposed to option value
    selectedPackSize = packSizeDropdown.options[packSizeDropdown.selectedIndex].text;

    calculatePrice();
}

// compute the final roll price based on user selections
function calculatePrice(){
    let finalPrice = ((product.basePrice + product.glazing) * product.size).toFixed(2);
    const priceTag = document.querySelector('.product-detail-price')
    priceTag.innerText = '$' + finalPrice;
}