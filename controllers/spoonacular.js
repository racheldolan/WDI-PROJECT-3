const rp = require('request-promise');
const { spoonKey } = require('../config/environment');
const spoonacular ='https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes';

function getRecipesByIngredients(req, res, next) {
  rp({
    method: 'GET',
    url: `${spoonacular}/findByIngredients`,
    qs: {
      ingredients: 'eggs,milk,potatoes',
      number: 5,
      ranking: 2,
      fillIngredients: true
    },
    headers: {
      'X-mashape-key': spoonKey
    },
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

function getRecipeById(req, res, next) {
  rp({
    method: 'GET',
    url: `${spoonacular}/${req.params.id}/information`,
    qs: {
      includeNutrition: 'false'
    },
    headers: {
      'Accept': 'application/json',
      'X-Mashape-Key': process.env.SPOONACULAR_API_KEY
    },
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}
module.exports={
  getRecipesByIngredients,
  getRecipeById
};
