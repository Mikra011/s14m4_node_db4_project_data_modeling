function getByRecipeID(recipe_id) {
    return Promise.resolve(`this is a recipe blbla id is: ${recipe_id}`)
}

module.exports = {
    getByRecipeID
}