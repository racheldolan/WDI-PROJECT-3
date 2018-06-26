const router = require('express').Router();
const auth = require('../controllers/auth');
const spoonacular = require('../controllers/spoonacular');
const users = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.route('/recipes')
  .get(spoonacular.getRecipesByIngredients);

router.route('/recipes/:id/information')
  .get(spoonacular.getRecipeById);

router.route('/users/:id/favourites')
  .post(secureRoute, users.createFavourite)
  .delete(secureRoute, users.deleteFavourite);

router.route('/profile')
  .get(secureRoute, users.profile);

router.get('/autocomplete', spoonacular.autocomplete);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

module.exports = router;
