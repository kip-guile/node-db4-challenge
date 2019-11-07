const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
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

// select
// s.instructions, s.step_number, r.recipe_name
// from steps as s
// join recipe as r
// on r.id = s.recipe_id
// where r.id = 1

function getInstructions(recipe_id) {
    return db('steps as s')
    .join('recipe as r', 'r.id', 's.recipe_id')
    .select('s.instructions', 's.step_number', 'r.recipe_name')
    .where('r.id', recipe_id)
    .orderBy('s.step_number')
}