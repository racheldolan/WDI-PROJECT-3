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

function commentModerate(req, res, next) {
  if(!req.currentUser.admin){
    return res.json({ message: 'Unauthorized' });
  }
  Comment.findById(req.params.id)
    .then(comment => {
      comment.approved = true;
      return comment.save();
    })
    .then(comment => res.json(comment))
    .catch(next);
}

module.exports = {
  commentCreate,
  commentDelete,
  commentModerate
};
