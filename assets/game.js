//variables array of letters to type
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUsed = [];

//key up fucntion to track each letter
document.onkeyup = function (event) {
    //guessesLeft--;

    var userguess = event.key;

    //console.log(userguess);

    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    //console.log(computerGuess);

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (options.indexOf(userguess) > -1) {
        if (userguess === computerGuess) {
            wins++
            guessesLeft = 9;
            letterUsed = [];
        }
        if (userguess != computerGuess) {
            guessesLeft--;
            letterUsed.push(guessesLeft);
        }

        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            letterUsed = [];
        }
        else {
            losses++
            //console.log("losses" + losses);
        }

        var html =
            "<p>Guess what letter I am thinking of</p>" +
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>" +
            "<p>Guesses left: " + guessesLeft + "</p>" +
            "<p>Your Guesses so far: " + letterUsed.join(", ") + "</p>";

        document.querySelector("#game").innerHTML = html;
    }
};
