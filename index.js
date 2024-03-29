const mongoose = require('mongoose');

const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const { insertQuizData } = require('./ExamModel'); 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require('dotenv').config();

const port = process.env.PORT || 3000;



// Create a Schema object

// Create a Model object

// Created using a function

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/form.html")
});

app.post('/', async (req, res) => {
  console.log(req.body);
  // get the data from the form
  const mongoURI = req.body.myuri;

  
  // connect to the database and log the connection

  mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Database');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

  app.use(bodyParser.json());
  

  // add the data to the database
  insertData();
  // send a response to the user
  res.send(`<h1>Document  Added</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


function insertData() {

  console.log('Inserting to MongoDB database');

  return new Promise((resolve, reject) => {
     
      const name = 'Ishwinder Singh';
      const sid = '300351938';

      
      insertQuizData(name, sid)
      .then(result => {
          console.log('Document inserted successfully:', result);
          resolve(result);
      })
      .catch(err => {
          console.error('Error during inserting data:', err);
          reject(err);
      });

  });
  
}