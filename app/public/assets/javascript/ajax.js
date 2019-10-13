$("#submitButton").on("click", function (event) {
    event.preventDefault();
    var name = $("#name").val().trim();
    var photoURL = $("#photoURL").val().trim();

    var queryURL = `/api/friends/${name}/${photoURL}`;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "POST"
    }).then(function() {
        console.log("hi")
    })
})