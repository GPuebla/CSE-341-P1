const express = require('express');
const mongodb = require('./data/database');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes');

const { swaggerUi, specs } = require('./swagger');



dotenv.config();
const app = express();

app.use(express.json());
app.use('/', routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 3000;


mongodb.initDb((err) => {
  if(err){
    console.log(err);
  }
  else{
    app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});
  }
});