const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes/routes")
const app = express();
const PORT = process.env.PORT || 3001;

require("dotenv").config();
const session = require("express-session");
const passport = require("./config/passport");
app.use(session({ secret: process.env.PASSPORT_PASS, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/letslifttogether", {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});