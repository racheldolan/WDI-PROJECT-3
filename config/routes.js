const router = require('express').Router();
const auth = require('../controllers/auth');
const spoonacular = require('../controllers/spoonacular');
const secureRoute = require('../lib/secureRoute');

router.route('/recipes')
  .get(spoonacular.getRecipesByIngredients);
router.route('/recipes/:id')
  .get(spoonacular.getRecipeById);

router.route('autocomplete')
  .get(spoonacular.autocomplete.spoonacular);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
