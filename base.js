const ingredientList = ['Skirt Steak', 'Bavette', 'Under Blade Steak']
const allIngredients = document.querySelector('.all-ingredients');
const recipeReccs = document.querySelector('.recipeReccs');

// Make the list of ingredients to pick from 
for (x in ingredientList) {
    allIngredients.insertAdjacentHTML('beforeend', `
    <input class="form-check-input" type="checkbox" value="" id="${ingredientList[x]}">
    <label class="form-check-label" for="flexCheckDefault">
        ${ingredientList[x]}
    </label>
    `);
};

const cookButton = document.querySelector('#cookButton');

// Make the Cook button do stuff
cookButton.addEventListener('click', function() {
    const checkedIngredients = document.querySelectorAll('input[type="checkbox"]:checked');
    console.log(checkedIngredients);
    for (x in checkedIngredients) {
        // displayRecipes(checkedIngredients.id);
        console.log(checkedIngredients[x].id); // Why is this bringing up like 7 events?
    }
});

// Display the recipes that make sense once the cook button is clicked

function displayRecipes(recipe) {
    recipeReccs.insertAdjacentHTML(`afterend`, `
    <li className="recipe">${recipe}</li>
    `)
}
