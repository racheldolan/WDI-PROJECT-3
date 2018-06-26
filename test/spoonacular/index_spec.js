/* global api, expect, describe, it */

describe('GET /api/recipes', () => {


  it('should return a 200 response', done => {
    api.get('/api/recipes')
      .query({ ingredients: 'egg,milk,potato' })
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array', done => {
    api.get('/api/recipes')
      .query({ ingredients: 'egg,milk,potato' })
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return an array of objects', done => {
    api.get('/api/recipes')
      .query({ ingredients: 'egg,milk,potato' })
      .end((err, res) => {
        res.body.forEach(recipe => expect(recipe).to.be.an('object'));
        done();
      });
  });

  it('should return the correct data', done => {
    api.get('/api/recipes')
      .query({ ingredients: 'egg,milk,potato' })
      .end((err, res) => {
        res.body.forEach(recipe => {
          expect(recipe).to.have.any.keys('id', 'title', 'image', 'missedIngredientCount');
        });
        done();
      });
  });



});
