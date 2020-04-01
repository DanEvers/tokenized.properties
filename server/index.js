// Dependencies
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

// Import variables
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

// Authentication

const {
  login,
  register,
  logout,
  userSession
} = require("./controller/authCtrl");

// Logbook

// const {
//   showLogbook,
//   updateJump
// } = require("./controller/logbookCtrl");

// Manifest

// const {
//   showJumpruns,
//   showActiveUsers,
//   addJumper,
//   removeJumper,
//   finishJumprun,
//   deleteJumprun,
// } = require("./controller/manifestCtrl");


// top-level middleware
const app = express();
app.use(express.json());

// set up session
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

// const path = require('path'); // Usually moved to the start of file

// connect to db via massive
massive(CONNECTION_STRING)
  .then(db => {
    console.log("connected to db");
    app.set('db', db);
  })
  .catch(err => console.log(err));

// endpoints
// AUTH
app.post('/auth/login', login);
app.post('/auth/register', register);
app.get('/auth/logout', logout);
app.get('/auth/userSession', userSession);

// logbookCtrl

// app.get('/api/yourLogbook/:user_id', showLogbook);
// app.put('/api/editLog/:jump_id', updateJump);

// manifestCtrl

// app.get('/api/jumpruns', showJumpruns);
// app.get('/api/activeusers', showActiveUsers);

// app.post('/api/addJumper/:user_id', addJumper);
// app.put('/api/removeJumper/:user_id', removeJumper);
// app.put('/api/finishJumprun/:jumprun_id', finishJumprun);
// app.delete('/api/deleteJumprun/:jumprun_id', deleteJumprun);


// run server on our port
app.listen(SERVER_PORT, () =>
  console.log(`Dan, I am listening on ${SERVER_PORT} as you wished`)
);
