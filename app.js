// ------ Web server configuration ------
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let mongodbUri = process.env.MONGODB_URI | "LOL";

// ------ Database ------
/*mongoose.connect(
  mongodbUri,
  { useNewUrlParser: true },
  (error) => {
    if (error) {
      console.error('Error during MongoDB connection:', error.message); // eslint-disable-line
      process.exit(1);
    }
  },
);*/

// ------ Enable cross origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST, OPTION');
  next();
});

// ------ Routes ------
app.use('/api', require('./routes/api'));

// ------ Start web server ------
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(' nodejs-api platform listening on port ' + port); // eslint-disable-line
});
