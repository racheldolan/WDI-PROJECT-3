/* global api, expect, describe, it, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');
let token;
let userId;

const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};


describe('DELETE /user/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({})
    ])
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '5m' });
        userId = user._id;
      })
      .then(() => done());
  });

  it('should return 204 response', done => {
    api
      .delete(`/api/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(userData)
      .end((err, res) => {
        expect(res.status).to.eq(204);
        done();
      });
  });

  it('should return 401 response without a token', done => {
    api
      .delete(`/api/users/${userId}`)
      .send(userData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

});
