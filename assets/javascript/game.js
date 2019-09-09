//generate randon munber between 1 and 12
var magicNumber;
var greenGuess;
var purpleGuess;
var orangeGuess;
var blueGuess;
var totalScore = 0;

//assign this number to magic numer
//generate randon number between 1 to 12
//assign  random number to each crystal*/

$(document).ready(function() {

    generateNumbers();

    function compareScore() {
        if (totalScore === magicNumber) {
            console.log("You win");
            ("#displayWin").text("you win !");

        } else if (totalScore > magicNumber) {
            console.log("you lose");
            $("#displayWin").text("Sorry, Try Again");

        } else {
            console.log(totalScore);
        }

    }
    //$("#blue").on("click", function() {
    // console.log(blueGuess);


    $("#blue").on("click", function() {
        console.log(blueGuess);
        totalScore = (totalScore + blueGuess);
        console.log("total score is " + totalScore);
        compareScore();
    });

    $("#green").on("click", function() {
        console.log(greenGuess);
        totalScore = (totalScore + greenGuess);
        console.log("total score is " + totalScore);
        compareScore();
    });

    $("#orange").on("click", function() {
        console.log(orangeGuess);
        totalScore = (totalScore + orangeGuess);
        console.log("total score is " + totalScore);
        compareScore();
    });

    $("#purple").on("click", function() {
        console.log(purpleGuess);
        totalScore = (totalScore + purpleGuess);
        console.log("total score is " + totalScore);
        compareScore();
    });


});

function generateNumbers() {
    blueGuess = Math.floor((Math.random() * 12) + 1);
    greenGuess = Math.floor((Math.random() * 12) + 1);
    orangeGuess = Math.floor((Math.random() * 12) + 1);
    purpleGuess = Math.floor((Math.random() * 12) + 1);
    magicNumber = Math.floor((Math.random() * 120) + 19);
    $("#magic").text("The magic number is " + magicNumber);
}