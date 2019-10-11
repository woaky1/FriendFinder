var friends = require("./friends.js");

var currentUserScore = [];
currentUserScore.push(friends[friends.length - 1].scores);
console.log("currentUserScore: " + currentUserScore);

userScores = [];
for (var j = 0; j < friends.length-1; j++) {
    userScores.push(friends[j].scores);
}

console.log(userScores)

// console.log(userScores[0]);
// console.log(userScores[0][0]);


function scoreCompare (array) {
    for (var k = 0; k < array.length; k++) {
        // console.log("Array going to second loop: " + array[k]);
        // console.log("First number in that array: " + array[k][0]);
        // console.log("Array's length: " + array[k].length);
        var diffCollection = [];
        for (var l = 0; l < array[k].length; l++) {
            console.log(array[k][l]);
            console.log(currentUserScore[k][l]);
            
            
            var dif = Math.abs(array[k][l] - currentUserScore[k][l]);
            console.log("dif" + dif);
            
            diffCollection.push(dif);
        }
        console.log(diffCollection);
    }
}

scoreCompare(userScores);