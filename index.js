/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.use(express.static('public'));

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
  res.render("body");
});

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
