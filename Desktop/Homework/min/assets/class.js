var wins = 0;
var losses= 0;
var ties = 0;
var options = ['R','P','S'];
function startgame() {

var userInput = prompt('Choose R, P, or S to play:').toUpperCase();
alert('')

var randomIndex = Math.floor(Math.random() * options.length)

var computerChoice = options[randomIndex]
alert("Computer Choice is " + computerChoice + "!");


 if (userInput === computerChoice) {
    alert('You tied!');
    ties = ties + 1;
 } else if (userInput === 'R' && computerChoice === 'S') {
    alert('You win!')
    wins++;
 }else if (userInput === 'P' && computerChoice === 'R'){
    alert('You win!')
    wins ++;
 }else if (userInput === 'S' && computerChoice === 'R'){
    alert('You win!')
    wins ++;
 }else{
    alert('You lost!');
    losses ++;
 };
 alert("stats\nWins:" + wins + "\nLosses:" + losses + "\nTies" + ties);


}

do { 
    startgame();
    var playAgain = confirm('Play again?');
} while (playAgain)




