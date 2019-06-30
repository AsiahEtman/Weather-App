const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require('hbs')
const mongoose = require('./database/dbConnection');
const app = express();
const weather = require('./routes/weather');

app.use(bodyParser.urlencoded({ extended: true }));

const viewsPath = path.join(__dirname, './views')
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "hbs")
app.set("views", viewsPath)



app.use('/', weather);

app.listen(3000, () => {
  console.log('Server is up on port ' + 3000)
})

module.exports = app;


