const rp = require('request-promise');
const { spoonKey } = require('../config/environment');
const spoonacular ='https://spoonacular-recipe-food-nutrition-v1.p.mashape.com';
const Comment = require('../models/comment');


function getRecipesByComplexSearch(req, res, next) {
  const { diet } = req.query;
  rp({
    method: 'GET',
    url: `${spoonacular}/recipes/searchComplex`,
    qs: {
      number: 15,
      ranking: 2,
      fillIngredients: true,
      includeIngredients: req.query.ingredients,
      diet,
      instructionsRequired: true
    },
    headers: {
      'x-mashape-key': spoonKey
    },
    json: true
  })
    .then(data => res.json(data.results))
    .catch(next);
}

// index route function
function getRecipesByIngredients(req, res, next) {
  const userInput = req.query.ingredients;

  rp({
    method: 'GET',
    url: `${spoonacular}/recipes/findByIngredients`,
    qs: {
      number: 15,
      ranking: 2,
      fillIngredients: true,
      ingredients: userInput
    },
    headers: { 'x-mashape-key': spoonKey },
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

// show route function
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
    .then(recipe => {
      Comment.find({spoonacularId: recipe.id})
        .populate('author')
        .then(comments => {
          recipe.comments = comments;
          res.json(recipe);
        });
    })
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


module.exports= {
  getRecipesByComplexSearch,
  getRecipesByIngredients,
  getRecipeById,
  autocomplete
};
