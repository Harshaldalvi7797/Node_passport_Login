const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("./");
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

  // if (errors.length > 0) {
  //   res.render("register", {
  //     errors,
  //     name,
  //     email,
  //     password,
  //     password2
  //   });
  // } else {
  //   User.findOne({ email: email }).then(user => {
  //     if (user) {
  //       errors.push({ msg: "Email already esist" });

  //       res.render("register", { errors, name, email, password, password2 });
  //     }
  //   });
  // }
  // else

  //   console.log(newUser)
  //   res.send("hello")
  // }  {
  //   const newUser = new User({
  //     name,email,password
  //   })
  const newUser = new User({
    name,
    email,
    password
  });
  res.send("hello");
  console.log(req.body);

  newUser
    .save()
    .then(user => {
      req.flash("success_msg", "You are now registered and can log in");
      res.redirect("/users/login");
    })
    .catch(err => console.log(err));
});
