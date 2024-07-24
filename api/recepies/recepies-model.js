const db = require('../../data/db-config')

async function getByRecipeID(recipe_id) {
    const recipe = await db('recipes')
        .where({ recipe_id })
        .first();

    const steps = await db('steps')
        .where({ recipe_id })

    for (let step of steps) {
        const ingredients = await db('step_ingredients as si')
            .join('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
            .where('si.step_id', step.step_id)
            .select('i.ingredient_name', 'i.ingredient_id', 'si.quantity')

        step.ingredients = ingredients.map(({ ingredient_name, quantity }) => ({ ingredient_name, quantity }))
    }

    const cleanedSteps = steps.map(({ recipe_id, step_id, ...rest }) => rest);
    recipe.steps = cleanedSteps;

    const { recipe_id: _, ...recipeWithoutID } = recipe

    return recipeWithoutID
}

module.exports = {
    getByRecipeID
}