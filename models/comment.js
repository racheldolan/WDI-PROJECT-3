const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  spoonacularId: { type: Number },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  rating: { type: Number, min: 1, max: 5},
  approved: { type: Boolean, default: false }
});

commentSchema.virtual('avgRating')
  .get(function() {
    return Math.floor(this.comments.reduce((sum, comment) => {
      return sum + comment.rating;
    }, 0) / this.comments.length);
  });

module.exports = mongoose.model( 'Comment', commentSchema);
