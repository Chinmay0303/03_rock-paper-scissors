const log = console.log;

log('main');

const playButton = document.querySelector('.play.button');
const resetButton = document.querySelector('.reset.button');

const mainContainer = document.querySelector('.main-container');
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
    else if(buttonClicked === 'img-button'){
        imgButtonClicked(event);
    }
}

function resetButtonClicked(){
    log('RESET');

    mainContainer.removeChild(mainContent);
    playArea.appendChild(playResultArea);
    playArea.appendChild(finalResultDiv);

    resetButton.disabled = true;
    playButton.disabled = false;
}

function playButtonClicked(){
    log('PLAY');
    mainContent.appendChild(playArea);
    mainContent.appendChild(scoreBoard);

    mainContainer.appendChild(mainContent);
    playArea.removeChild(playResultArea);
    playArea.appendChild(roundsDiv);
    playArea.appendChild(imgContainer);
    playArea.removeChild(finalResultDiv);

    userScore.textContent = 0;
    compScore.textContent = 0;
    roundNo = 1;
    roundsDiv.textContent = `Round ${roundNo}`;


    playButton.disabled = true;
    resetButton.disabled = false;
}

function imgButtonClicked(event){
    log(event.target.id);
    let imgSource = ['./imgs/rock.png','./imgs/paper.png','./imgs/scissors_1.png'];
    
    let userChoice;

    if(event.target.id === 'img-button-rock'){
        userChoice = 0;
    }
    else if(event.target.id === 'img-button-paper'){
        userChoice = 1;
    }
    else{
        userChoice = 2;
    }

    let compChoice = Math.floor(Math.random()*3);
    log(compChoice);

    userImg.setAttribute('src',imgSource[userChoice]);
    compImg.setAttribute('src',imgSource[compChoice]);

    let uScore = + userScore.textContent;
    let cScore = + compScore.textContent;

    if(userChoice === 0 && compChoice === 2
        || userChoice === 1 && compChoice === 0
        || userChoice === 2 && compChoice === 1){
            resultDiv.textContent = `Round ${roundNo} Result: User Wins`;
            uScore++;
        }
    else if(userChoice === compChoice){
            resultDiv.textContent = `Round ${roundNo} Result: Tie`;
    }
    else{
            resultDiv.textContent = `Round ${roundNo} Result: Computer Wins`;
            cScore++;
    }

    userScore.textContent = uScore;
    compScore.textContent = cScore;

    roundsDiv.textContent = `Round ${++roundNo}`;

    playArea.appendChild(playResultArea);

     // if rounds reach 5

     if(roundNo > 5){
        endGame(uScore,cScore);
    }
}

function endGame(uScore,cScore){
    log('Game Ends');

    playArea.removeChild(roundsDiv);
    playArea.removeChild(imgContainer);
    roundNo = 1;

    playButton.disabled = false;
    resetButton.disabled = true;

    if(uScore > cScore){
        finalResultDiv.textContent = 'Final Result: User Wins';
    }
    else if(uScore === cScore){
        finalResultDiv.textContent = 'Final Result: Tie';
    }
    else{
        finalResultDiv.textContent = 'Final Result: Computer Wins';
    }

    playArea.appendChild(finalResultDiv);
}

// Creating divs inside .main-content
const playArea = document.createElement('div');
playArea.classList.add('play-area');

    const roundsDiv = document.createElement('div');
    const imgContainer = document.createElement('div');

    playArea.appendChild(roundsDiv);
    playArea.appendChild(imgContainer);

    roundsDiv.classList.add('rounds-div');
    imgContainer.classList.add('img-container');

        let roundNo = 1;
        roundsDiv.textContent = `Round ${roundNo}`;

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
        imgButtonScissors.src = './imgs/scissors_1.png';
        imgButtonScissors.classList.add('img-button');
        imgButtonScissors.setAttribute('id','img-button-scissors');

        imgContainer.appendChild(imgButtonRock);
        imgContainer.appendChild(imgButtonPaper);
        imgContainer.appendChild(imgButtonScissors);

    // creating .play-result-area inside .play-area

    const playResultArea = document.createElement('div');
    playResultArea.classList.add('play-result-area');
    playArea.appendChild(playResultArea);

    // when user clicks an image button

    const playedAreaDiv = document.createElement('div');
    playedAreaDiv.classList.add('played-area-div');
    playResultArea.appendChild(playedAreaDiv);

        const userPlayedArea = document.createElement('div');
        userPlayedArea.classList.add('user-played-area');
        playedAreaDiv.appendChild(userPlayedArea);

            const userPlayedText = document.createElement('div');
            userPlayedText.classList.add('user-played-text');
            userPlayedText.textContent = 'User: ';
            userPlayedArea.appendChild(userPlayedText);
            
            const userPlayedImageDiv = document.createElement('div');
            userPlayedImageDiv.classList.add('user-played-image-div');
            userPlayedArea.appendChild(userPlayedImageDiv);

                const userImg = document.createElement('img');
                userImg.classList.add('user-img');
                userImg.setAttribute('width','60px');
                userImg.setAttribute('height','60px');
                userPlayedImageDiv.appendChild(userImg);
        
        const vsDiv = document.createElement('div');
        vsDiv.classList.add('vs-div');
        vsDiv.textContent = 'vs';
        playedAreaDiv.appendChild(vsDiv);
            

        const compPlayedArea = document.createElement('div');
        compPlayedArea.classList.add('comp-played-area');
        playedAreaDiv.appendChild(compPlayedArea);
            
            const compPlayedText = document.createElement('div');
            compPlayedText.classList.add('comp-played-text');
            compPlayedText.textContent = 'Computer: ';
            compPlayedArea.appendChild(compPlayedText);
            
            const compPlayedImageDiv = document.createElement('div');
            compPlayedImageDiv.classList.add('comp-played-image-div');
            compPlayedArea.appendChild(compPlayedImageDiv);

                const compImg = document.createElement('img');
                compImg.classList.add('comp-img');
                compImg.setAttribute('width','60px');
                compImg.setAttribute('height','60px');
                compPlayedImageDiv.appendChild(compImg);

        const resultDiv = document.createElement('div');
        resultDiv.classList.add('resut-div');
        playResultArea.appendChild(resultDiv);

    // final result div
    const finalResultDiv = document.createElement('div');
    finalResultDiv.classList.add('final-result-div');
    playArea.appendChild(finalResultDiv);

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
