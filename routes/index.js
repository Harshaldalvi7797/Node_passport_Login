const express = require("express");
const router = express.Router();

//welcome
router.get("/", (req, res) => res.render("welcome"));

//Login Page
router.get("/login", (req, res) => res.render("login"));

//Register page
router.get("/register", (req, res) => res.render("register"));
module.exports = router;
