const log = console.log;

log("Hello, World;");

// make choices to map to 1,2 and 3

let choice_1 = 'Rock';
let choice_2 = 'Paper';
let choice_3 = 'Scissors';

// ask user for input (rock, paper, scissors)

let userChoice;

// I don't want the user to enter anything other than the given choices: 1, 2 or 3.

// create a while loop for ascertaining this

// create a function for taking user input multiple times

function userPlays(){
    let choice = false;

    while(choice === false){

        userChoice = prompt("Choose one: 1-Rock, 2-Paper or 3-Scissors");

        if(userChoice == 1 || userChoice == 2 || userChoice == 3){
            choice = true;
        }
        else{
            log("Enter either 1,2 or 3");
        }
    }

    log({userChoice});
    return userChoice;
    // log(typeof userChoice);
}

userPlays();
// log('2nd');
// userPlays();

// generate random computer choice

let computerChoice;

function computerPlays(){
    computerChoice = 1 + Math.floor(Math.random()*3);
    log({computerChoice});
    return computerChoice;
}

computerPlays();

// compare the two
// decide a winner
// if computer wins -> computer score increases by one
// if user wins -> user score increases by one
// repeat this 5 times
// after 5 rounds compare both the score
// declare the ultimate winner