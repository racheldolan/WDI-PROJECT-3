const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const bodyParser = require('body-parser');
const { dbURI, port } = require('./config/environment');

mongoose.connect(dbURI);

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());

app.listen(port, () => console.log(`listening to ${port}`));
