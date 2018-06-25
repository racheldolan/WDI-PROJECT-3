const rp = require('request-promise');
const { spoonKey } = require('../config/environment');
const spoonacular ='https://spoonacular-recipe-food-nutrition-v1.p.mashape.com';


function getRecipesByIngredients(req, res, next) {
  console.log(req.body);

  rp({
    method: 'GET',
    url: `${spoonacular}/recipes/findByIngredients`,
    qs: { ingredients: 'eggs,milk,potatoes' },
    headers: { 'x-mashape-key': spoonKey },
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

function getRecipeById(req, res, next) {
  rp({
    method: 'GET',
    url: `${spoonacular}/recipes/${req.params.id}/information`,
    qs: {
      includeNutrition: 'false'
    },
    headers: {
      'Accept': 'application/json',
      'X-Mashape-Key': spoonKey
    },
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

function autocomplete(req, res, next) {
  rp({
    method: 'GET',
    url: `${spoonacular}/food/ingredients/autocomplete`,
    qs: {
      query: req.query.query
    },
    headers: {
      'Accept': 'application/json',
      'X-Mashape-Key': spoonKey
    },
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports={
  getRecipesByIngredients,
  getRecipeById,
  autocomplete
};
