var friends = require("./friends.js");

function scoreCompare (array) {
    // console.log(array);
    var currentUserScore = [];
    currentUserScore.push(array[array.length - 1].scores);
    console.log(currentUserScore);

    var userScores = [];
    for (var j = 0; j < array.length-1; j++) {
        userScores.push(array[j].scores);
    }
    var diffCollection = [];
    console.log(userScores)
    for (var k = 0; k < userScores.length; k++) {
        // console.log("Array going to second loop: " + array[k]);
        // console.log("First number in that array: " + array[k][0]);
        // console.log("Array's length: " + array[k].length);
        dif = 0;
        for (var l = 0; l < userScores[k].length; l++) {
            console.log(userScores[k][l]);
            console.log(currentUserScore[0][l]);
            dif += Math.abs(userScores[k][l] - currentUserScore[0][l]);
            console.log("dif" + dif);
        }
        diffCollection.push(dif);
    }
    console.log("diffCollection: " + diffCollection);
    var lowestDif = Math.min(...diffCollection);
    console.log(lowestDif);
    var bffIndex = diffCollection.indexOf(lowestDif);
    var bffInfo = {
        name: friends[bffIndex].name,
        photo: friends[bffIndex].photo
    };
    return bffInfo;
    
    
}

module.exports = scoreCompare;