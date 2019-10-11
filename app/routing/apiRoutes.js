var friends = require("../data/friends");

module.exports = function (server) {
    server.post("/api/userdata", function (req, res) {
        console.log(req.body);
        userInfo.push(req.body);
        console.log("yes post is working");
        res.json(req.body)

    });

    server.get("/api/friends", function (req, res) {
        return res.json(friends);
    })

};