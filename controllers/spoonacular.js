const rp = require('request-promise');
const { spoonKey } = require('../config/environment');
const spoonacular ='https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes';


function getRecipesByIngredients(req, res, next) {
  const { ingredients } =  req.body;
  rp({
    method: 'GET',
    url: `${spoonacular}/findByIngredients`,
    qs: {
      ingredients,
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
      'X-Mashape-Key': spoonKey
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
