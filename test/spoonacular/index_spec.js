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

  it('should return an array of ojects', done => {
    api.get('/api/recipes')
      .query({ ingredients: 'egg,milk,potato' })
      .end((err, res) => {
        res.body.forEach(recipe => expect(recipe).to.be.an('object'));
        done();
      });
  });

// this test failing
  it('should return the correct data', done => {
    api.get('api/recipes')
      .query({ ingredients: 'egg,milk,potato' })
      .end((err, res) => {
        expect(res.body[0].id).to.eq(120879);
        expect(res.body[0].title).to.eq('Deep Fried Mashed Potatoes');
        expect(res.body[0].image).to.eq('https://spoonacular.com/recipeImages/120879-312x231.jpg');
        expect(res.body[0].usedIngredientCount).to.eq(3);
        expect(res.body[0].missedIngredientCount).to.eq(0);
        expect(res.body[0].likes).to.eq(77);
        done();
      });
  });
  // it('should return the correct data', done => {
  //   api.get('api/recipes')
  //     .query({ ingredients: 'egg,milk,potato' })
  //     .end((err, res) => {
  //       expect(res.body).to.have.pr(120879);
  //       expect(res.body[0].title).to.eq('Deep Fried Mashed Potatoes');
  //       expect(res.body[0].image).to.eq('https://spoonacular.com/recipeImages/120879-312x231.jpg');
  //       expect(res.body[0].usedIngredientCount).to.eq(3);
  //       expect(res.body[0].missedIngredientCount).to.eq(0);
  //       expect(res.body[0].likes).to.eq(77);
  //       done();
  //     });
  // });



});
