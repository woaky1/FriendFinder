var friends = require("../data/friends");
var score = [];
module.exports = function (server) {
    server.post("/api/friends", function (req, res) {
        console.log(req.body);
        var userInput = new FriendInfo(req.body);
        friends.push(userInput);
        console.log("yes post is working");
        res.json(200)

    });

    server.get("/api/friends", function (req, res) {
        return res.json(friends);
    })

};

function FriendInfo (userInfo) {
    this.name = userInfo.name;
    this.photoURL = userInfo.photoURL;
    this.scores = [parseInt(userInfo.q1), parseInt(userInfo.q2), parseInt(userInfo.q3), parseInt(userInfo.q4), parseInt(userInfo.q5), parseInt(userInfo.q6), parseInt(userInfo.q7), parseInt(userInfo.q8), parseInt(userInfo.q9), parseInt(userInfo.q10)];

}