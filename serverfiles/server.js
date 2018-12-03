const express = require('express');
const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;
const users = require('./users');

const app = express();
const port = 5000;

mongoose
  .connect(db)
  .then(() => console.log('Mongodb Connected!'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/users', users);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
