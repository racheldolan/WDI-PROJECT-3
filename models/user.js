const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, minLength: 2,  required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  admin: {type: Boolean},
  image: { type: String, default: 'https://www.mycookmaster.com/skin/frontend/rwd/default/new_service/defaultService.png'},
  bio: { type: String, default: 'Change your bio!' },
  favourites: []

});

userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json){
    delete json.password;
    return json;
  }
});

userSchema.plugin(uniqueValidator);
//virtual for password confirmation
userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

//pre validate hook
userSchema.pre('validate', function checkPasswordMatch(next) {
  if(this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'passwords do not match');
  }
  next();
});

//if the user has not changed the password it will still be a hashed password. The user will then have to enter the hashed password should they want to get in.
userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  //8 rounds of salting and hashing before setting it to the password
  next();
  //go to the next piece of middleware.
});
// compareSync to compare plain text to hash
userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
