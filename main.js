const log = console.log;

log('main');

const playButton = document.querySelector('.play.button');
const resetButton = document.querySelector('.reset.button');

const mainContent = document.querySelector('.main-content');

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

function resetButtonClicked(){
    log('RESET');
    mainContent.removeChild(playArea);
    mainContent.removeChild(scoreBoard);

    resetButton.disabled = true;
    playButton.disabled = false;
}

function playButtonClicked(){
    log('PLAY');
    mainContent.appendChild(playArea);
    mainContent.appendChild(scoreBoard);

    playButton.disabled = true;
    resetButton.disabled = false;
}

// Creating divs inside .main-content
const playArea = document.createElement('div');
playArea.classList.add('play-area');

    const optionsDiv = document.createElement('div');
    const imgContainer = document.createElement('div');

    playArea.appendChild(optionsDiv);
    playArea.appendChild(imgContainer);

    optionsDiv.classList.add('options-div');
    imgContainer.classList.add('img-container');

        optionsDiv.textContent = 'Choose One: ';

        // creating buttons to choose from
        const imgButtonRock = document.createElement('input');
        imgButtonRock.type = 'image';
        imgButtonRock.src = './imgs/rock.png';
        imgButtonRock.classList.add('img-button');
        imgButtonRock.setAttribute('id','img-button-rock');

        const imgButtonPaper = document.createElement('input');
        imgButtonPaper.type = 'image';
        imgButtonPaper.src = './imgs/paper.png';
        imgButtonPaper.classList.add('img-button');
        imgButtonPaper.setAttribute('id','img-button-paper');

        const imgButtonScissors = document.createElement('input');
        imgButtonScissors.type = 'image';
        imgButtonScissors.src = './imgs/scissors.png';
        imgButtonScissors.classList.add('img-button');
        imgButtonScissors.setAttribute('id','img-button-scissors');

        imgContainer.appendChild(imgButtonRock);
        imgContainer.appendChild(imgButtonPaper);
        imgContainer.appendChild(imgButtonScissors);

    // creating .play-result-area inside .play-area

    const playResultArea = document.createElement('div');
    playResultArea.classList.add('play-result-area');

    // playArea.appendChild(playResultArea); when user clicks an image button

        const userPlayedArea = document.createElement('div');
        userPlayedArea.classList.add('user-played-area');
        playResultArea.appendChild(userPlayedArea);

            const userPlayedText = document.createElement('div');
            userPlayedText.classList.add('user-played-text');
            userPlayedText.textContent = 'User Played: ';
            userPlayedArea.appendChild(userPlayedText);
            
            const userPlayedImage = document.createElement('div');
            userPlayedImage.classList.add('user-played-image');
            userPlayedArea.appendChild(userPlayedImage);
            

        const compPlayedArea = document.createElement('div');
        compPlayedArea.classList.add('comp-played-area');
        playResultArea.appendChild(compPlayedArea);
            
            const compPlayedText = document.createElement('div');
            compPlayedText.classList.add('comp-played-text');
            compPlayedText.textContent = 'Computer Played: ';
            compPlayedArea.appendChild(compPlayedText);
            
            const compPlayedImage = document.createElement('div');
            compPlayedImage.classList.add('comp-played-image');
            compPlayedArea.appendChild(compPlayedImage);
            



// creating divs inside score-board

const scoreBoard = document.createElement('div');
scoreBoard.classList.add('score-board');

    const scoreBoardTitle = document.createElement('div');
    scoreBoardTitle.classList.add('score-board-title');
    scoreBoardTitle.textContent = 'Score Board';
    scoreBoard.appendChild(scoreBoardTitle);

    const scoreDiv = document.createElement('div');
    scoreDiv.classList.add('score-div');
    scoreBoard.appendChild(scoreDiv);

        const userScoreDiv = document.createElement('div');
        userScoreDiv.classList.add('user-score-div');
        scoreDiv.appendChild(userScoreDiv);

            const userTitle = document.createElement('div');
            userTitle.classList.add('title');
            userTitle.textContent = 'User: ';
            userScoreDiv.appendChild(userTitle);

            const userScore = document.createElement('div');
            userScore.classList.add('score');
            userScore.textContent = 0;
            userScoreDiv.appendChild(userScore);
            

        const compScoreDiv = document.createElement('div');
        compScoreDiv.classList.add('comp-score-div');
        scoreDiv.appendChild(compScoreDiv);

            const compTitle = document.createElement('div');
            compTitle.classList.add('title');
            compTitle.textContent = 'Computer: ';
            compScoreDiv.appendChild(compTitle);

            const compScore = document.createElement('div');
            compScore.classList.add('score');
            compScore.textContent = 0;
            compScoreDiv.appendChild(compScore);
