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
imgButtonRock.type = 'image';
imgButtonRock.src = './imgs/rock.png';
imgButtonRock.classList.add('img-button');

const imgButtonPaper = document.createElement('input');
imgButtonPaper.type = 'image';
imgButtonPaper.src = './imgs/paper.png';
imgButtonPaper.classList.add('img-button');

const imgButtonScissors = document.createElement('input');
imgButtonScissors.type = 'image';
imgButtonScissors.src = './imgs/scissors.png';
imgButtonScissors.classList.add('img-button');

imgContainer.appendChild(imgButtonRock);
imgContainer.appendChild(imgButtonPaper);
imgContainer.appendChild(imgButtonScissors);

function resetButtonClicked(){
    log('RESET');
    playArea.removeChild(optionsDiv);
    playArea.removeChild(imgContainer);

    resetButton.disabled = true;
    playButton.disabled = false;
}

function playButtonClicked(){
    log('PLAY');
    playArea.appendChild(optionsDiv);
    playArea.append(imgContainer);

    playButton.disabled = true;
    resetButton.disabled = false;
}