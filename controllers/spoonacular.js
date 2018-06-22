const rp = require('request-promise');
const { spoonKey } = require('../config/environment');


function getRecipesByIngredients(req, res, next) {

  rp({
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients',
    qs: { ingredients: 'eggs,milk,potatoes' },
    headers: { 'x-mashape-key': spoonKey },
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  getRecipesByIngredients
};
