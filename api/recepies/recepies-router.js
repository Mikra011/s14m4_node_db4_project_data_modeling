const express = require('express')
const Recipe = require('./recepies-model')

const router = express.Router()

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getByRecipeID(req.params.recipe_id)
      .then(recipe => {
        res.status(200).json(recipe)
      })
      .catch(next)
  })






router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: "something wrong in router",
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router