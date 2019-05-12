var express = require("express"),
  app = express(),
  cors = require("cors"),
  path = require("path"),
  bodyParser = require("body-parser"),
  routes = require("./routes/index");

app.use(cors());
// app.use("/static", express.static(path.join(__dirname, "views")));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.listen(5001, function() {
  console.log("server is listening on port 5000!");
});

app.use("/", routes);
module.exports = app;
