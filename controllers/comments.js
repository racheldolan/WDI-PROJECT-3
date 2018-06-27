const Comment = require('../models/comment');

function commentCreate(req, res, next) {
  req.body.author = req.currentUser;
  Comment.create(req.body)
    .then(comment => res.json(comment))
    .catch(next);
}

function commentDelete(req, res, next) {
  Comment.findById(req.params.id)
    .then(comment => comment.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  commentCreate,
  commentDelete
};
