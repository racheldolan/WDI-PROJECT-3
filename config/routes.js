const router = require('express').Router();
const auth = require('../controllers/auth');
const spoonacular = require('../controllers/spoonacular');

router.route('/recipes')
  .get(spoonacular.getRecipesByIngredients);
router.route('/recipes/:id')
  .get(spoonacular.getRecipeById);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
