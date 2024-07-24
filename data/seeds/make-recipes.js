const recipes = [
    { recipe_name: 'Spaghetti Bolognese' },
    { recipe_name: 'Penne Carbonara' },
    { recipe_name: 'Alfoldi Gulas' }
]

const ingredients = [
    { ingredient_name: 'Spaghetti', ingredient_unit: 'g' },
    { ingredient_name: 'Penne', ingredient_unit: 'g' },
    { ingredient_name: 'Ham', ingredient_unit: 'g' },
    { ingredient_name: 'Cheese', ingredient_unit: 'g' },
    { ingredient_name: 'Potatos', ingredient_unit: 'pieces' },
    { ingredient_name: 'Tomato', ingredient_unit: 'pieces' }
]

const steps = [
    // Spaghetti Bolognese
    { step_instructions: 'Heat pan', step_number: 1, recipe_id: 1 },
    { step_instructions: 'Add tomato', step_number: 2, recipe_id: 1 },
    { step_instructions: 'Add spaghetti', step_number: 3, recipe_id: 1 },
    // Penne Carbonara
    { step_instructions: 'Heat pan', step_number: 1, recipe_id: 2 },
    { step_instructions: 'Add penne', step_number: 2, recipe_id: 2 },
    { step_instructions: 'Add ham and cheese', step_number: 3, recipe_id: 2 },
    // Alfoldi Gulas
    { step_instructions: 'Make fire', step_number: 1, recipe_id: 3 },
    { step_instructions: 'Add tomato', step_number: 2, recipe_id: 3 },
    { step_instructions: 'Add potato', step_number: 3, recipe_id: 3 },
]

const step_ingredients = [
    { step_id: 2, ingredient_id: 6, quantity: 5 },
    { step_id: 3, ingredient_id: 1, quantity: 1 },
    { step_id: 5, ingredient_id: 2, quantity: 1 },
    { step_id: 6, ingredient_id: 3, quantity: 350 },
    { step_id: 6, ingredient_id: 4, quantity: 350 },
    { step_id: 8, ingredient_id: 6, quantity: 4 },
    { step_id: 9, ingredient_id: 5, quantity: 3 },
]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}