var path = require("path");
var express = require("express");

// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. (allows port to be set or defaults to 8080)
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./app/public'))
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, function () {
    console.log("Friend Finder App listening on PORT: " + PORT);
});
