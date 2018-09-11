//baseball words

var wordBank = ["baseball", "pitcher", "catcher", "base", "homerun", "single", "triple", "double", "mound", "outfield", "infield", "bullpen", "batter"];

var wins = 0;
var chances = 10;
var guessed;
var lettersGuessed;

display();

document.onkeyup = function() {
    var userGuess = event.key;
    console.log(userGuess);
    reset();
}

function display() {
    var adjWins = document.getElementById("wins");
    var adjChances = document.getElementById("chances");
    var adjLetGuessed = document.getElementById("lettersGuessed");

    adjWins.textContent = "Number of Wins: " + wins;
    adjChances.textContent = "Guesses Remaining: " + chances;
    adjLetGuessed.textContent = "Letters Guessed: " + guessed//.join(",");
}

function reset() {
    chances = 10;
    guessed = [];
    compGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(compGuess);
}