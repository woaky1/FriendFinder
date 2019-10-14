var friends = require("../data/friends");
var scoreCompare = require("../data/friendshipCalc");

module.exports = function (server) {
    server.post("/api/friends/:name/:photo/:q1/:q2/:q3/:q4/:q5/:q6/:q7/:q8/:q9/:q10", function (req, res) {
        if ((req.params.name && req.params.photo && req.params.q1 && req.params.q2 && req.params.q3 && req.params.q4 && req.params.q5 && req.params.q6 && req.params.q7 && req.params.q8 && req.params.q9 && req.params.q10) !== "null") {
            console.log(req.params);
            var userInput = new FriendInfo(req.params);
            friends.push(userInput);
            console.log("yes post is working");
            var response = scoreCompare(friends)
            console.log(response);
            return res.json(response);
        } else {
            res.status(400).send('Bad Request');
        }
    });

    server.get("/api/friends", function (req, res) {
        return res.json(friends);
    })

};

function FriendInfo (userInfo) {
    this.name = userInfo.name;
    this.photo = userInfo.photo;
    this.scores = [parseInt(userInfo.q1), parseInt(userInfo.q2), parseInt(userInfo.q3), parseInt(userInfo.q4), parseInt(userInfo.q5), parseInt(userInfo.q6), parseInt(userInfo.q7), parseInt(userInfo.q8), parseInt(userInfo.q9), parseInt(userInfo.q10)];

}