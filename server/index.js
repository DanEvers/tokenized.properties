// Dependencies
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

// Import variables
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

// Authentication
const { login, register, logout, userSession } = require("./controller/authCtrl");
const { getAllObjects, getUserObjects , addNewObject, editObject, deleteObject } = require("./controller/objectCtrl");

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

// connect to db via massive
massive(CONNECTION_STRING)
  .then(db => {
    console.log("connected to db");
    app.set("db", db);
  })
  .catch(err => console.log(err));

// endpoints
// AUTH
app.post("/auth/login", login);
app.post("/auth/register", register);
app.get("/auth/logout", logout);
app.get("/auth/userSession", userSession);

// Objects
app.get("/api/objects", getAllObjects);
app.get("/api/objects/:user_id", getUserObjects);
app.post("/api/objects/user_id", addNewObject);
// app.put("/api/objects/:object_id", editObject);
app.delete("/api/objects/:object_id", deleteObject);

// run server on our port
app.listen(SERVER_PORT, () =>
  console.log(`Dan, I am listening on ${SERVER_PORT} as you wished`)
);
