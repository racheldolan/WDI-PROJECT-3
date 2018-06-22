const port = 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = `mongodb://localhost/wdi-project-3${env}`;

module.exports = { port, dbURI };
