// Dependencies 
// ================================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friendsArray = [];

// Setting express
// ================================================================================
var app = express();
var PORT = process.env.PORT || 8080;


//Body Parser (middleware)
// ================================================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Static files
// ================================================================================
// needs to be called before the routes in order to work
app.use(express.static(__dirname + "/app/public"));


// Routers
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Starts the server to begin listening
// ================================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
