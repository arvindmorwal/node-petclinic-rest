const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Load Models
require('./models/Visit');
require('./models/Vet');
require('./models/Pet');

// Load Routes
const visits = require('./routes/visits')
const vets = require('./routes/vets')
const pets = require('./routes/pets');

const initDB = require('./config/prepopulate_db');

// Load Keys
const keys = require('./config/keys');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose.connect(keys.mongoURI, {
  useMongoClient:true
})
  .then(() => {
    console.log('MongoDB Connected');
    // Initialize the DB
    initDB.execute();
  })
  .catch(err => console.log(err));

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/visits', visits);
app.use('/vets', vets);
app.use('/pets', pets);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});