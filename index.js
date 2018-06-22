const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const bodyParser = require('body-parser');
const { dbURI, port } = require('./config/environment');

mongoose.connect(dbURI);

const routes = require('./config/routes');


app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, () => console.log(`listening to ${port}`));

module.exports = app;
