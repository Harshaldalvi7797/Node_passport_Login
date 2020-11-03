const express = require("express");
const app = express();
const port = process.env.port || 3000;
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");


mongoose
  .connect("mongodb://localhost/pass", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`connected successfully`))
  .catch(error => console.log(`something went to wrong ${error.message}`));
//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//Routes
app.use("/", require("./routes/index"));
app.listen(port, console.log(`server started on port ${port}`));
