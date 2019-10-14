// This javascript file contains the calculation we use to determine who is the user's best match.
// To do this calculation, we need to grab the data from friends.js.
var friends = require("./friends.js");

function scoreCompare (array) {
    var currentUserScore = [];
    // We know the current user was the last person entered into the array, so we grab their score data from the last entry.
    currentUserScore.push(array[array.length - 1].scores);

    var userScores = [];
    // To make the calculation we need to go through each answer of each user. So we put a loop going through each answer within a loop that goes through each entry that isn't the current user.
    for (var j = 0; j < array.length-1; j++) {
        userScores.push(array[j].scores);
    }
    var diffCollection = [];
    for (var k = 0; k < userScores.length; k++) {
        dif = 0;
        // We compare the answers to the current potential friend to the current user and find the absolute value of the difference between each answer, add them up, then push to an array.
        for (var l = 0; l < userScores[k].length; l++) {
            dif += Math.abs(userScores[k][l] - currentUserScore[0][l]);
        }
        diffCollection.push(dif);
    }
    // Next we find what the lowest total difference in the array.
    var lowestDif = Math.min(...diffCollection);
    // Since we find the differences in order, the index of the lowest total will be the index in the friends array of the person who's the best match.
    var bffIndex = diffCollection.indexOf(lowestDif);
    // Now we build an object we can pass back to the front end to help create the results modal.
    var bffInfo = {
        name: friends[bffIndex].name,
        photo: friends[bffIndex].photo
    };
    return bffInfo;
}
// We have to export scoreCompare so we can use it in apiRoutes.js.
module.exports = scoreCompare;