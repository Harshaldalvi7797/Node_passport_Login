const express = require("express");
const app = express();
const port = process.env.port || 3000;
const expressLayouts = require("express-ejs-layouts");

//EJS
app.use(expressLayouts)
app.set('view engine', "ejs")

//Routes
app.use("/", require("./routes/index"));
app.listen(port, console.log(`server started on port ${port}`));
