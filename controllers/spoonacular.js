const rp = require('request-promise');
const { spoonKey } = require('../config/environment');
const spoonacular ='https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes';

// index route function
function getRecipesByIngredients(req, res, next) {
  const userInput = req.query.ingredients;
  console.log(typeof(userInput));

  rp({
    method: 'GET',
    url: `${spoonacular}/findByIngredients`,
    qs: { ingredients: userInput },
    headers: { 'x-mashape-key': spoonKey },
    json: true
  })
    .then(response => {
      res.json(response);
      console.log(response);
    })
    .catch(next);
}

// show route function
function getRecipeById(req, res, next) {
  // console.log(req.params.id);
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
