const express = require('express')
const path = require('path');
const app = express()
var PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
<<<<<<< HEAD
app.use(express.static( __dirname + '/public' ));
app.use('/static', express.static(__dirname + '/public'));

=======
>>>>>>> parent of e642a0b... I got the ajax javascript into it's own file by adding code to server.js pointing where static files come from.

require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});