// LOAD DATA
// We are linking our routes to a series of "data" sources.
var path = require('path');

var friendData = require("../data/friends");


// ROUTING
module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)


    //Total list of friends
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array


    //Add new friend
    app.post("/api/friends", function (req, res) {
        //gather user input
        var userInput = req.body;
        console.log(userInput);
        //gather user scores
        var userResponses = userInput.scores;
        console.log(userResponses);
        
        //determine best friend match
        var matchName = '';
        var matchImage = '';
        var totalDifference = 10000;

        // loop through all friends in data
        for (i=0; i < friendData.length; i++) {
            var diff = 0;
            for (j=0; j < userResponses.length; j++) {
                diff += Math.abs(friendData[i].scores[j] - userResponses[j])
            }
            console.log(`diff =` + diff);

            //record the friend with the lowest difference
            if(diff < totalDifference){
                console.log(`smallest difference found ${diff} 
                Friend name: ${friendData[i].name}
                Friend Picture: ${friendData[i].photo}`)

                totalDifference = diff;
				matchName = friendData[i].name;
				matchImage = friendData[i].photo;
            }
        }

        //sends new friend to data
        friendData.push(userInput);
        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});

        //res.json(friendData);
    })
};
