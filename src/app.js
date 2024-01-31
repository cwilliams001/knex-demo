const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV||'development']);;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Application is running');
})


app.get('/pets', (req, res) => {
  knex('pet')
    .select('*')
    .then(pets => {
      var petNames = pets.map(pet =>  pet.name);
      res.json(petNames);
      })
    })


app.listen(port, () => {
  console.log(`App is running on port ${port}`);
})