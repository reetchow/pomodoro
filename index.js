const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => console.log(`Running on port ${port}`));

// Modeling things as resources

// Projects
// - id
// - name
// - description
// - due date

app.get('/projects', (req, res) => {
  // fetch projects from DB
  // format data into response
  res.setHeader('Content-Type', 'application/json');
  res.json({
    id: 1,
    name: 'Learn to program',
    description: 'I want to learn to program so I can work as a software dev',
    due_date: '2020-04-30',
  }); // send response
});

app.post('/projects', (req, res) => {
  // read project definition from POST body
  // validate project definition
  // insert new project into database
  res.send('blank'); // send response succeeded
});

app.patch('/projects', (req, res) => {
  // read project definition from PATCH body
  // validate project definition
  // update project in database
  res.send('blank'); // send response succeeded
});

// Users
// - id
// - first name
// - last name
// - email

app.get('/users', (req, res) => {
  // fetch projects from DB
  // format data into response
  res.setHeader('Content-Type', 'application/json');
  res.json([
    {
      id: 13,
      first_name: 'Reet',
      last_name: 'Chowdhary',
      email: 'reet@voiceops.com',
    },
    {
      id: 14,
      first_name: 'Atmika',
      last_name: 'Sharma',
      email: 'atmika95@gmail.com',
    }
  ]); // send response
});

app.post('/users', (req, res) => {
  // read project definition from POST body
  // validate project definition
  // insert new project into database
  res.send('blank'); // send response succeeded
});

app.patch('/users', (req, res) => {
  // read project definition from PATCH body
  // validate project definition
  // update project in database
  res.send('blank'); // send response succeeded
});

// ProjectSessions
// - id
// - project id
// - start time
// - end time