const log = console.log;

log("Hello, World;");

// store scores of user and computer
let userScore = 0;
let computerScore = 0;

// make choices to map to 1,2 and 3

const choice_1 = 'Rock';
const choice_2 = 'Paper';
const choice_3 = 'Scissors';

function playGame(){

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
    log(`User played ${choose(userChoice)}`);
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
    log(`Computer played ${choose(computerChoice)}`);
    return computerChoice;
}

computerPlays();

function choose(choice){
    if (+choice === 1){
        return choice_1;
    }
    else if (+choice === 2){
        return choice_2;
    }
    else
        return choice_3;
}

// compare the two
// decide a winner
// if computer wins -> computer score increases by one
// if user wins -> user score increases by one

function winner(){
    if (+userChoice === computerChoice) {
        return 'Draw';
    } else if (
        (+userChoice === 1 && computerChoice === 3) ||
        (+userChoice === 2 && computerChoice === 1) ||
        (+userChoice === 3 && computerChoice === 2)
    ) {
        userScore++;
        return 'User Wins';
    } else {
        computerScore++;
        return 'Computer Wins';
    }
}


log(winner());
log({userScore});
log({computerScore});

}

// repeat this 5 times

let game = 1;
let keepgoing = true;

while(keepgoing){
    log(`Game ${game}: `);
    playGame();

    if(game++ == 5){
        keepgoing = false;
    }
}
// after 5 rounds compare both the score
// declare the ultimate winner

if (+userScore > +computerScore) {
    log("The User is the Ultimate Winner");
}
else if (+userScore < +computerScore) {
    log("The Computer is the Ultimate Winner");
}
else{
    log("The spoils are shared");
}
