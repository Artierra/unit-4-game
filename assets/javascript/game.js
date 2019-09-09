//generate randon munber between 1 and 12


//assign this number to magic numer
//generate randon number between 1 to 12
//assign  random number to each crystal*/

$(document).ready(function() {



    alert("hi");

    // magic number will be between 1 and 120
    var magicNumber = Math.floor((Math.random() * 120) + 19);
    $("#magic").text("The magic number is " + magicNumber);

    $("#blue").on("click", function() {
        alert("You clicked a crystal!");
    });


    // function addScore() {
    $("#green").on("click", function() {
        var greenGuess = Math.floor((Math.random() * 12) + 1);
        console.log(greenGuess);
    });

    $("#orange").on("click", function() {
        var orangeGuess = Math.floor((Math.random() * 12) + 1);
        console.log(orangeGuess);
    });

    $("#purple").on("click", function() {
        var purpleGuess = Math.floor((Math.random() * 12) + 1);
        console.log(purpleGuess);
    });
    //     var sumScore = greenGuess + orangeGuess + purpleGuess;
    //    console.log("sum is " + sumScore);
    // }

    //function addScore(g, o, p) {


    // if (score === magicNumber) {
    //     $("#displayWin").text("you win !");
    // } else(score > magicNumber); {
    //     $("#displayWin").text("Sorry, Try Again");
    // }

    // addScore(greenGuess, orangeGuess, purpleGuess);


})