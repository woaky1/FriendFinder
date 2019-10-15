// This javascript file handles requests related to html calls.
var path = require("path");

module.exports = function (app) {
    // This serves the survey page when the url ends with '/survey'.
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))

    });

    //For all other, non-api request, we default to the home page.
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};