/**
 * Required External Modules
 */
const express = require("express");
const process = require("process");
const handlebars = require("express-handlebars");
const os = require("os");
const hljs = require("highlight.js");
const isDocker = require('is-docker');
const prettyBytes = require('pretty-bytes');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";
let data = {
  hostname: os.hostname(),
  application: process.env.npm_package_name,
  version: process.env.npm_package_version,
  platform: os.platform(),
  memstats: {
    memused:prettyBytes(os.totalmem() - os.freemem()) +" out of "+ prettyBytes(os.totalmem()),
    freemem: Math.round((os.freemem() / os.totalmem()) * 100) + " %",
  },
  deployed: new Date().toUTCString(),
};

/**
 *  App Configuration
 */
app.locals.layout = false;
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.use(express.static("public"));

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
  res.render("home", {
    data: hljs.highlight(JSON.stringify(data, null, 2), { language: "json" })
      .value,
    port: port,
    node_version: process.version,
    release: process.release.lts,
    isDocker: isDocker()
  });
});

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listener Status : Active (Port ${port})`);
  console.log(`Hostname        : ${data.hostname}`);
  console.log(`Application     : ${data.application}`);
  console.log(`Version         : ${data.version}`);
  console.log(`NodeJS          : ${process.version} (${process.release.lts})`);
  console.log(`Docker          : ${isDocker()}`);
  console.log(`Platform        : ${data.platform}`);
  console.log(`Deployed At     : ${data.deployed}`);
});
