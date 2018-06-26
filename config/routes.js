const router = require('express').Router();
const auth = require('../controllers/auth');
const spoonacular = require('../controllers/spoonacular');
const Users = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.route('/recipes')
  .get(spoonacular.getRecipesByIngredients);
router.route('/recipes/:id')
  .get(spoonacular.getRecipeById);

router.post('/users/:id/favourites', secureRoute, Users.createFavourite);
//deletefavouriterecipe

router.route('/profile')
  .get(secureRoute, Users.profile);

router.get('/autocomplete', spoonacular.autocomplete);

router.post('/register', auth.register);
router.post('/login', auth.login);



router.route('/users/:id')
  .get(Users.show)
  .put(secureRoute, Users.update)
  .delete(secureRoute, Users.delete);

router.post('/comments', secureRoute, spoonacular.commentCreate);


module.exports = router;
