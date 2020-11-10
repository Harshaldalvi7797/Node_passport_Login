const express = require("express");
const app = express();
const port = process.env.port || 3000;
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const ejsLint = require("ejs-lint");
const ejs = require("ejs");

// mongoose
//   .connect("mongodb://localhost/pass", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log(`connected successfully`))
//   .catch(error => console.log(`something went to wrong ${error.message}`));

const db = require("./config/keys").mongoURI;

//connect to mongoose

mongoose
  .connect(db, { useNewUrlParser: true,useUnifiedTopology: true  })
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//Bodyparser
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/", require("./routes/index"));
app.listen(port, () => console.log(`server started on port ${port}`));
