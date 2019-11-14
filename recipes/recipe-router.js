const express = require('express')

const Recipes = require('./recipe-model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get schemes'})
        })
})


router.get('/:id/ingredients', (req, res) => {
    const {id} = req.params

    Recipes.getShoppingList(id)
        .then(ingredients => {
            if (ingredients.length) {
                res.json(ingredients)
            } else {
                res.status(404).json({message: 'Could not find ingredients for given recipe'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get ingredients' })
        })
})

router.get('/:id/instructions', (req, res) => {
    const {id} = req.params

    Recipes.getInstructions(id)
        .then(instructions => {
            if (instructions.length) {
                res.json(instructions)
            } else {
                res.status(404)
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get instructions' })
        })
})

module.exports = router;