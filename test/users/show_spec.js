/* global api, expect, describe, it, beforeEach */

const User = require('../../models/user');

const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

let userId;

describe('GET /users/:id', () => {
  beforeEach(done => {
    User.remove({})
    //remove any existing users
      .then(() => User.create(userData))
      //create the userdata above
      .then(user => {
        userId = user._id;
      })
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api.get(`/api/users/${userId}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return the correct data', done => {
    api.get(`/api/users/${userId}`)
      .end((err, res) =>{
        expect(res.body.username).to.eq(userData.username);
        expect(res.body.email).to.eq(userData.email);
        done();
      });
  });
});

//return correct data
