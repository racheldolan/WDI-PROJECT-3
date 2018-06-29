const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/wdi-project-3${env}`;
const spoonKey = process.env.SPOONACULAR_API_KEY;
const secret = process.env.SECRET || 'P85t+sEHuX';

module.exports = { port, dbURI, spoonKey, secret };
