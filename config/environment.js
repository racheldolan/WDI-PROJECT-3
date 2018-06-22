const port = 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = `mongodb://localhost/wdi-project-3${env}`;
const spoonKey = process.env.SPOONACULAR_API_KEY;
const secret = 'P85t+sEHuX';

module.exports = { port, dbURI, spoonKey, secret };