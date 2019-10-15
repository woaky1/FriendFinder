// This javascript file handles requests related to api calls.
var friends = require("../data/friends");
var scoreCompare = require("../data/friendshipCalc");

module.exports = function (server) {
    server.post("/api/friends/:name/:photo/:q1/:q2/:q3/:q4/:q5/:q6/:q7/:q8/:q9/:q10", function (req, res) {
        // The following line is a bit more validation on top of what is on the front end in case someone tries to circumvent that validation via a tool like Postman.
        if ((req.params.name && req.params.photo && req.params.q1 && req.params.q2 && req.params.q3 && req.params.q4 && req.params.q5 && req.params.q6 && req.params.q7 && req.params.q8 && req.params.q9 && req.params.q10) !== "null") {
            // Next, we run the user's responses through this constructor to format it how we want it.
            var userInput = new FriendInfo(req.params);
            // Next, we add it to the friends array.
            friends.push(userInput);
            // This console log is just to help us on the back end know things are working as expected.
            console.log("Post is working");
            // Now we take the friends array and run it through our friendship calculator to see who would be the user's ideal friend.
            var response = scoreCompare(friends)
            // Another backend console long to keep an eye on things.
            console.log(response);
            // We send the results to the front end for display.
            return res.json(response);
        } else {
            res.status(400).send('Bad Request');
        }
    });

    // This get command serves the JSON for the friends array if the user clicks the link at the bottom of the home or survey page.
    server.get("/api/friends", function (req, res) {
        return res.json(friends);
    })

};

// This is the constructor we use to format the user's responses into something that our calculator can process easily.
function FriendInfo (userInfo) {
    this.name = userInfo.name;
    this.photo = userInfo.photo;
    this.scores = [parseInt(userInfo.q1), parseInt(userInfo.q2), parseInt(userInfo.q3), parseInt(userInfo.q4), parseInt(userInfo.q5), parseInt(userInfo.q6), parseInt(userInfo.q7), parseInt(userInfo.q8), parseInt(userInfo.q9), parseInt(userInfo.q10)];

}