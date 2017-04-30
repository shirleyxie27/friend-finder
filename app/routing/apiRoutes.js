var path = require("path");
var friendsData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

 // Create New servey input - takes in JSON input
 // ================================================================================
  app.post("/api/friends", function(req, res){
        
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 100
        }; //bestmatch

        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference = 0;

        //loop through scores of survery
        for (var i = 0; i < friendsData.length; i++){
            //console.log(friendsData[i].name);
            //totalDifference = 0;

            // loop through score to calculate difference
            for ( var j = 0; j < friendsData[i].scores.length; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));
            }
                if (totalDifference <= bestMatch.friendDifference){
                    bestMatch.name = friendsData[i].name;
                    bestMatch.photo = friendsData[i].photo;
                    bestMatch.friendDifference = totalDifference;
                       //console.log(totalDifference);
                       //console.log(bestMatch);
                       console.log("Your best match is: " + bestMatch.name + "Pucture is here: " + bestMatch.photo)
                    }
        }   

        friendsData.push(userData);
        res.json(bestMatch);
        //module.exports = bestMatch;
    });
} //end of module.exports