/* global api, expect, describe, it */


describe('GET /api/recipes/:id', () => {

  it('should return a 200 response', done => {
    api.get(`/api/recipes/${120879}/information`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.get(`/api/recipes/${120879}/information`)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.get(`/api/recipes/${120879}/information`)
      .end((err, res) => {
        expect(res.body).to.have.any.keys('id', 'title', 'image', 'readyInMinutes', 'servings', 'instructions', 'extendedIngredients');
        done();
      });
  });
});
