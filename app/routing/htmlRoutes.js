// We need to include the path package to get the correct file path for our html
var path = require("path");

// ROUTING
module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visits" a page.
   
    //Home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    //Survey Page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //css page
    app.get("/css", function (req, res){
        res.sendFile(path.join(__dirname, "../public/css/style.css"));
    });
};
