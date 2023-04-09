console.log('hello');

const ingredients = [
    {
        name: "flour",
        density: 131
    },
    {
        name: "brown sugar",
        density: 200
    },
    {
        name: "sugar",
        density: 201
    },
    {
        name: "salt",
        density: 273
    },
    {
        name: "water",
        density: 236
    },
    {
        name: "milk",
        density: 240
    },
    {
        name: "butter",
        density: 227
    },
    {
        name: "Cocoa Powder",
        desnsity: 132
    }
]


const units = [
    {
        name: "teaspoon",
        eq: 0.020833
    },
    {
        name: "tablespoon",
        eq: 0.0625
    },
    {
        name: "ounce",
        eq: 0.125
    },
    {
        name: "cup",
        eq: 1
    },
    {
        name: "pint",
        eq: 2
    },
    {
        name: "quart",
        eq: 4
    },
    {
        name: "gallon",
        eq: 16
    }
]

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const ingredient = document.querySelector('input[name="ingredient"]:checked').value;
    const density = ingredients[ingredient].density;
    const ingredientName = ingredients[ingredient].name;
    const amount = document.querySelector('#amount').value;
    const result = document.querySelector('#result');

    const unit = document.querySelector('input[name="unit"]:checked').value;
    const cupsPerSelected = units[unit].eq;

    result.textContent = Math.round(density * amount * cupsPerSelected) + ' grams ' + ingredientName;
})

let radioString = "";
for (let i=0; i<ingredients.length; i++) {
    radioString += `<label><input type='radio' value='${i}' name='ingredient' required>${ingredients[i].name}</label><br/>\n`;
}
const ingredientsList = document.querySelector("#ingredientsList");
ingredientsList.innerHTML = radioString;

let unitString = "";
for (let i=0; i<units.length; i++) {
    unitString += `<label><input type='radio' value='${i}' name='unit' required></input>${units[i].name}</label><br>\n`
}
const unitsList = document.querySelector("#unitsList");
unitsList.innerHTML = unitString;