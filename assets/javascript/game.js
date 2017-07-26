//  JS for Psychic Game
//
var totalGuesses = 0;
var guessesRemaining = 0;
var totalWins = 0;
var totalLosses = 0;
var alphabet = ("abcdefghijklmnopqrstuvwxyz");
var randomLetter;

// Set things up
function loadFunction() {
  totalGuesses = 10;
  guessesRemaining = totalGuesses;
  randomLetter = alphabet[(Math.floor(Math.random() * 26))];
  console.log(randomLetter);
  document.getElementById("guessesLeft").innerHTML = totalGuesses; 
  document.getElementById("yourGuesses").value = ""; 
  document.getElementById("yourGuesses").focus();
}

// The psychic magic happens here
function checkInput() {

  var guesses = document.getElementById("yourGuesses").value;
  document.getElementById("guessesLeft").innerHTML = guessesRemaining; 

  //   /^[a-zA-Z]+$/ means match all strings that start with a letter
  //   /[^a-zA-Z]+$/ matches a string that STARTS with one-or more upper- 
  //   or lower-case letters and also ends with it. Meaning, the only thing 
  //   in your string is upper- or lower-case letters.
  //   ^ is begin of string, $ is end of string. It's used here to make 
  //   sure the complete string does contain characters. 
  if (guesses.match(/^[a-zA-Z]+$/)) {
    // alphabet letters found
    // Could use this option 
    // var n = str.indexOf("welcome");
    console.log("u good-" + guesses[(guesses.length)-1]); 
    guessesRemaining = guessesRemaining - 1;
    document.getElementById("guessesLeft").innerHTML = guessesRemaining; 

    //compare to random character
    if ((guesses[(guesses.length)-1]).toLowerCase() === randomLetter) {
      document.getElementById("status").innerHTML 
      = "Your psychic mind is working!  You Win! Try Again"; 
      totalWins = totalWins + 1;
      document.getElementById("wins").innerHTML = totalWins; 
      loadFunction();
      return; 
    }

  } else {
    // alert("The mystic mind cannot understand your last entry - Try Again");
    guesses = guesses.slice(0, -1);
    console.log(guesses);
    document.getElementById("yourGuesses").value = guesses; 
  }

  if (guessesRemaining === 0) {
    totalLosses = totalLosses + 1;
    document.getElementById("losses").innerHTML = totalLosses; 
    document.getElementById("status").innerHTML 
      = "Psychic mind is fuzzy. No Match! Try Again!";
    loadFunction();
  }
}

