const express = require("express");
const app = express();
const port = process.env.port || 3000;
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
//const ejsLint = require("ejs-lint");
//const expressLayouts=require
//const ejs = require("ejs");
const flash = require("connect-flash");
const session = require("express-session");

const db = require("./config/keys").mongoURI;

//connect to mongoose
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//Bodyparser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

//connect flash
app.use(flash());

//global vars
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

//Routes
app.use("/", require("./routes/index"));
app.listen(port, () => console.log(`server started on port ${port}`));
