// This javascript is the actual server running the app. We start by requiring the Express node package.
const express = require('express')
const app = express()
// Next we set things up so Heroku can set a port, or we'll auto-assign 3001.
var PORT = process.env.PORT || 3001

// These lines allow to Express to parse info placed in a url as well as JSON data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// These two lines point our app to the routing javascript files.
require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)

// Here we start the server up tell it to start listening for requests.
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});