const log = console.log;

log("Hello, World;");

// ask user for input (rock, paper, scissors)

let userChoice;

// I don't want the user to enter anything other than the given choices: 1, 2 or 3.

// create a while loop for ascertaining this

let choice = false;

while(choice === false){
    
    userChoice = prompt("Choose one: 1-Rock, 2-Paper or 3-Scissors");

    log("Enter either 1,2 or 3");

    if(userChoice == 1 || userChoice == 2 || userChoice == 3){
        choice = true;
    }
}

log({userChoice});
// log(typeof userChoice);

// generate random computer choice
// compare the two
// decide a winner
// if computer wins -> computer score increases by one
// if user wins -> user score increases by one
// repeat this 5 times
// after 5 rounds compare both the score
// declare the ultimate winner