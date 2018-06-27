const router = require('express').Router();
const auth = require('../controllers/auth');
const spoonacular = require('../controllers/spoonacular');
const Users = require('../controllers/users');
const Comment = require('../controllers/comments');
const secureRoute = require('../lib/secureRoute');

router.route('/recipes')
  .get(spoonacular.getRecipesByComplexSearch);
router.route('/recipes/:id')
  .get(spoonacular.getRecipeById);

router.route('/recipes/:id/favourites')
  .post(secureRoute, Users.createFavourite)
  .delete(secureRoute, Users.deleteFavourite);
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

router.route('/comments')
  .post(secureRoute, Comment.commentCreate);

router.route('/comments/:id')
  .delete(secureRoute, Comment.commentDelete);

module.exports = router;
