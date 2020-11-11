const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("./");
const bcrypt = require("bcrypt");
//const name = require("../views/login");
//welcome
router.get("/", (req, res) => res.render("welcome"));

//Login Page
router.get("/login", (req, res) => res.render("login"));

//Register page
router.get("/register", (req, res) => res.render("register"));
module.exports = router;

//register handle
router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (errors.length > 0) {
    res.render("register", { errors, name, email });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: "Email already exists" });
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2
        });
      }
    });
  }
  const newUser = new User({
    name,
    email,
    password
  });

  //Hash password

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()

        .then(user => {
          //req.flash("success_msg", "You are now register");
          res.redirect("login");
        })
        .catch(err => console.log(err));
    });
  });

  // res.send("hello");
  console.log(req.body);
  console.log(newUser);

  // newUser
  //   .save()
  //   .then(user => {
  //     req.flash("success_msg", "You are now registered and can log in");
  //     res.redirect("/login");
  //   })
  //   .catch(err => console.log(err));
});
