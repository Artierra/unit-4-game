//generate randon munber between 1 and 12


//assign this number to magic numer
//generate randon number between 1 to 12
//assign  random number to each crystal*/

$(document).ready(function() {



        alert("hi");

        // var magicNumber = 50;
        var magicNumber = Math.floor((Math.random() * 12) + 1);
        $("#magic").text("The magic number is " + magicNumber);

        $("#blue").on("click", function() {
            alert("You clicked a crystal!");
        });

        /*function Random() {
            var magicNumber = Math.floor((Math.random() * 12) + 1);
            console.log(magicNumber);
            //$("#divone").text(magicNumber);
            $("#magic").text("The magic number is " + magicNumber);

        } */




    })
    // Random();







/*function random12() {

    $("#blue").on("click", function() {
        var randomNumberBetween1and12 = Math.floor(Math.random() * 12);
        return randomNumberBetween1and12;
        console.log(randomNumberBetween1and12);
        alert("Your new score is: " + randomNumberBetween1and12);
        $("#magic").text("The magic number is " + random12);


    });*/