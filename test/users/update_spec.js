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

const updatedData ={
  username: 'updated',
  email: 'updated@updated.com',
  password: 'updated',
  passwordConfirmation: 'updated'
};


describe('PUT /users/:id', () => {
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

  it('should return 401 response without token', done => {
    api
      .put(`/api/users/${userId}`)
      .send(userData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return 200 response', done => {
    api
      .put(`/api/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(userData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return correct data', done => {
    api
      .put(`/api/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(updatedData)
      .end((err, res) => {
        expect(res.body.username).to.eq(updatedData.username);
        expect(res.body.email).to.eq(updatedData.email);
        done();
      });
  });

});
