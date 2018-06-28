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

router.put('/users/:id/favourites', secureRoute, Users.createFavourite);
router.put('/users/:id/favourites/delete', secureRoute, Users.deleteFavourite);
//deletefavouriterecipe

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

router.route('/comments/:id')
  .patch(secureRoute, Comment.commentModerate);

module.exports = router;
