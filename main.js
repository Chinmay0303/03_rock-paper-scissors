const log = console.log;

log('main');

const playButton = document.querySelector('.play.button');
const resetButton = document.querySelector('.reset.button');

resetButton.disabled = true;

// making use of event bubbling
// adding eventListener on the whole document rather than on individual buttons
document.addEventListener('click', clickFunction);

function clickFunction(event){
    let buttonClicked = event.target.classList.value;
    // gives class of the clicked button

    if(buttonClicked === 'reset button'){
        resetButtonClicked();
    }
    else if(buttonClicked === 'play button'){
        playButtonClicked();
    }
}

// Creating divs inside play-area
const playArea = document.querySelector('.play-area');
const optionsDiv = document.createElement('div');
const imgContainer = document.createElement('div');

optionsDiv.classList.add('options-div');
imgContainer.classList.add('img-container');

optionsDiv.textContent = 'Choose One: ';

// creating buttons to choose from
const imgButtonRock = document.createElement('input');
imgButtonRock.type = 'image'
const imgButtonPaper = document.createElement('input');
imgButtonRock.type = 'image'
const imgButtonScissors = document.createElement('input');
imgButtonRock.type = 'image'


function resetButtonClicked(){
    log('RESET');
    playArea.removeChild(optionsDiv);

    resetButton.disabled = true;
    playButton.disabled = false;
}

function playButtonClicked(){
    log('PLAY');
    playArea.appendChild(optionsDiv);

    playButton.disabled = true;
    resetButton.disabled = false;
}