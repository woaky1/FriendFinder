var friends = require("../data/friends");
var score = [];
module.exports = function (server) {
    server.post("/api/friends", function (req, res) {
        console.log(req.body);
        var userInput = new FriendInfo(req.body);
        friends.push(userInput);
        console.log("yes post is working");
        res.json(req.body)

    });

    server.get("/api/friends", function (req, res) {
        return res.json(friends);
    })

};

function FriendInfo (userInfo) {
    this.name = userInfo.name;
    this.photoURL = userInfo.photoURL;
    this.score = [parseInt(userInfo.q1), parseInt(userInfo.q2)];
    // console.log(scoreRaw);
    // this.score = []
    // var scoreBox = [];
    // for (var i = 0; i < scoreRaw.length; i++) {
    //     scoreBox.push(parseInt(score[i]));
    //     this.score.push(scoreBox);   
    // }

}