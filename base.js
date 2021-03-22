const ingredientList = ['Skirt Steak', 'Bavette', 'Under Blade Steak']
const allIngredients = document.querySelector('.all-ingredients');

for (x in ingredientList) {
    allIngredients.insertAdjacentHTML('beforeend', `
    <input class="form-check-input" type="checkbox" value="" id="${ingredientList[x]}">
    <label class="form-check-label" for="flexCheckDefault">
        ${ingredientList[x]}
    </label>
    `);
};

const cookButton = document.querySelector('#cookButton');

cookButton.addEventListener('click', function() {
    const checkedIngredients = document.querySelectorAll('input[type="checkbox"]:checked');
    console.log(checkedIngredients);
});

