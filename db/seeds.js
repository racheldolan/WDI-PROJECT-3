const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('../models/user');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    username: 'rachel',
    email: 'rachel@rachel.com',
    admin: true,
    password: 'rachel',
    passwordConfirmation: 'rachel'
  }, {
    username: 'natasha',
    email: 'natasha@natasha.com',
    admin: true,
    password: 'natasha',
    passwordConfirmation: 'natasha'
  }, {
    username: 'linda',
    email: 'linda@linda.com',
    admin: true,
    password: 'linda',
    passwordConfirmation: 'linda'
  }, {
    username: 'mike',
    email: 'mike@mike.com',
    password: 'mike',
    passwordConfirmation: 'mike'
  }, {
    username: 'nic',
    email: 'nic@nic.com',
    admin: true,
    password: 'nic',
    passwordConfirmation: 'nic'
  }, {
    username: 'stevan',
    email: 'stevan@stevan.com',
    password: 'stevan',
    passwordConfirmation: 'stevan'
  }, {
    username: 'rich',
    email: 'rich@rich.com',
    password: 'rich',
    passwordConfirmation: 'rich'
  }, {
    username: 'martin',
    email: 'martin@martin.com',
    password: 'martin',
    passwordConfirmation: 'martin'
  }, {
    username: 'bianca',
    email: 'bianca@bianca.com',
    password: 'bianca',
    passwordConfirmation: 'bianca'
  }])

    .then(users => `${users.length} users created`)
    .catch(err => err)
    .finally(() => mongoose.connection.close());

});
