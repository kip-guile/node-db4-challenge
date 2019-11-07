const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList
}

function getRecipes() {
    return db('recipe')
}

// select 
// m.quantity, i.ingredient_name as ingredientname
// from mix as m
// join ingredients as i
// on i.id = m.ingredient_id
// where m.recipe_id = 3

function getShoppingList(recipe_id) {
    return db('mix as m')
    .join('ingredients as i', 'i.id', 'm.ingredient_id')
    .select('i.ingredient_name', 'm.quantity')
    .where('m.recipe_id', recipe_id)
}