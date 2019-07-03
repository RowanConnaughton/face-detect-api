const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");

const app = express();
const knex = require("knex");
const morgan = require("morgan");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");
const auth = require("./controllers/authorization");

const db = knex({
  client: "pg",
  connection: process.env.POSTGRES_URI
});

app.use(morgan("combined"));

app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("it is working");
});
//sign in
app.post("/signin", signin.signinAuthentication(db, bcrypt));

//register
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

//profile
app.get("/profile/:id", auth.requireAuth, (req, res) => {
  profile.handleProfileGet(req, res, db);
});

//update profile
app.post("/profile/:id", auth.requireAuth, (req, res) => {
  profile.handleProfileUpdate(req, res, db);
});

//image update image entries
app.put("/image", auth.requireAuth, (req, res) => {
  image.handleImage(req, res, db);
});

//image url api call
app.post("/imageurl", auth.requireAuth, (req, res) => {
  image.handleApiCall(req, res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});
