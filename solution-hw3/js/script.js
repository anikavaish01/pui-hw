// dictionary to hold glazing options
const GLAZING_DICT = {
    KEEP_ORIGINAL: 'Keep Original',
    SUGAR_MILK: 'Sugar Milk',
    VANILLA_MILK: 'Vanilla Milk',
    DOUBLE_CHOCOLATE: 'Double chocolate'
}

// arrays to hold pack size & adaptation multiplier 
const PACK_SIZE_ARRAY = [1, 3, 6, 12]
const PRICE_ADAPT_ARRAY = [1, 3, 5, 10]

// define 'product' class
class Product {

    // define class variables with default values
    packSize = 0
    priceAdaptation = 0

    // utilize a switch case to determine selected glazing option price
    changeGlazing(glazing) {
        switch(glazing) {
            case GLAZING_DICT.KEEP_ORIGINAL:
            case GLAZING_DICT.SUGAR_MILK:
                this.priceAdaptation = 0
                break
            case GLAZING_DICT.VANILLA_MILK:
                this.priceAdaptation = 0.5
                break
            case GLAZING_DICT.DOUBLE_CHOCOLATE:
                this.priceAdaptation = 1.5
                break
        }
    }

    // update pack size 
    changePackSize(packSize) {
        this.packSize = packSize
    }

    // compute & return the final price of the selected cinnamon roll
    getFinalPrice() {
        return ((2.49 + this.priceAdaptation) * PRICE_ADAPT_ARRAY[this.packSize]).toFixed(2)
    }
}

// instantiate an instance of the "product" class
const product = new Product()

// define a function to update the glazing option based on user selection
function updateGlazingField(event) {
    const glazing = event.target.value
    product.changeGlazing(glazing)
    updatePrice()
}

// define a function to update the pack size value based on user selection
function updatePackField(event) {
    const packSize = event.target.value
    product.changePackSize(packSize)
    updatePrice()
}

// retrieve the glazing dropdown from html
const glazingDropdown = document.querySelector('#glazing')
// on user selection, call the "updateGlazingField" function
glazingDropdown.addEventListener('change', updateGlazingField)

// define a function that creates new glazing option elements within html 
function createGlazingOption(glazing) {
    const option = document.createElement('option')
    option.innerText = glazing
    option.value = glazing

    glazingDropdown.appendChild(option)
}

// retrieve the pack size dropdown from html
const packSizeDropdown = document.querySelector('#pack-size')
// on user selection, call the "updatePackField" function
packSizeDropdown.addEventListener('change', updatePackField)

// define a function that creates new pack size options within html
function createPackSizeOption(i) {
    const option = document.createElement('option')
    option.innerText = PACK_SIZE_ARRAY[i]
    option.value = i

    packSizeDropdown.appendChild(option)
}

// define a function that displays the updated product price
function updatePrice() {
    const priceTag = document.querySelector('.product-detail-price')
    priceTag.innerText = '$' + product.getFinalPrice();
}

// iterate over the glazing dictionary to create the glazing dropdown options
for (const o of Object.values(GLAZING_DICT)) {
    createGlazingOption(o)
}

// iterate over the pack size array to create the pack size dropdown options
for (const p in PACK_SIZE_ARRAY) {
    createPackSizeOption(p)
}

// call the function "updatePrice"
updatePrice()
