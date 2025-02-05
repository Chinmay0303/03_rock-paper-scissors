const log = console.log;

log("Hello, World;");

// ask user for input (rock, paper, scissors)

let userChoice;
userChoice=prompt("Choose one: 1-Rock, 2-Paper or 3-Scissors");

log(userChoice);
log(typeof userChoice);

// generate random computer choice
// compare the two
// decide a winner
// if computer wins -> computer score increases by one
// if user wins -> user score increases by one
// repeat this 5 times
// after 5 rounds compare both the score
// declare the ultimate winner