//variables array of letters to type
var alphabet = [];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUsed = [];
var computerGuess = [];

generateAlphabet();

//computer makes a guess
computerGuess = setGuess();

//key up fucntion to track each letter
document.onkeyup = function (event) {
    var userguess = event.key.toLocaleLowerCase();

    if (guessesLeft > 0) {
        if (userguess === computerGuess) {
            wins++;
            guessesLeft = 9;
            letterUsed.push(userguess);
        }
        else {
            guessesLeft--;
            letterUsed.push(userguess);
        }
    }
    else {
        guessesLeft = 9;
        losses++;
        letterUsed = [];
        setGuess = [];
        //restart would not happen unless refresh browser
    }
    //put results to display on html 
    var html =
        "<p>Guess what letter I am thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Your Guesses so far: " + letterUsed.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = html;
}

function generateAlphabet() {
    for (var i = 97; i <= 122; i++) {
        var userguess = String.fromCharCode(i)
        alphabet.push(userguess);
    }
}
//randomize computer options
function setGuess() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}
