const totalScore = {playerScore:0, computerScore:0};

function getComputerChoice(){
    const choice = ["Rock","Paper","Scissor"];
    var number = Math.floor(Math.random()*3);
    return choice[number];
}

function getResult(playerChoice, computerChoice){
    var score;
    if(playerChoice == computerChoice){
        score = 0;
    }
    else if(playerChoice == "Rock" && computerChoice == "Scissor"){
        score = 1;
    }
    else if(playerChoice == "Paper" && computerChoice == "Rock"){
        score = 1;
    }
    else if(playerChoice == "Scissor" && computerChoice == "Paper"){
        score = 1;
    }
    else{
        score = -1;
    }
    return score;
}

function showResult(score, playerChoice, computerChoice){
    const playerScoreDiv = document.getElementById("player-score");
    const handsDiv = document.getElementById("hands");
    const resultDiv = document.getElementById("result");

    if(score == 1){
        resultDiv.innerText = "You Win!!";
    }
    else if(score == 0){
        resultDiv.innerText = "It's a tie!";
    }
    else{
        resultDiv.innerText = "You Lose!";
    }
    handsDiv.innerText = `${playerChoice} vs ${computerChoice}`;
    playerScoreDiv.innerText = `Your score : ${totalScore["playerScore"]}`;
}

function onclickRPS(playerChoice){
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice, computerChoice);
    totalScore["playerScore"] += score;
    totalScore["computerScore"] -= score;
    showResult(score, playerChoice, computerChoice);
}

function playGame(){
    const rpsButtons = document.querySelectorAll(".rpsButton");
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onclickRPS(rpsButton.value);
    })
    const endGameButton = document.getElementById('endGameButton');
    endGameButton.onclick = () => endGame(totalScore);
}

function endGame(){
    totalScore["computerScore"] = 0;
    totalScore["playerScore"] = 0;
    const playerScoreDiv = document.getElementById("player-score");
    const handsDiv = document.getElementById("hands");
    const resultDiv = document.getElementById("result");

    playerScoreDiv.innerText = "";
    handsDiv.innerText = "";
    resultDiv.innerText = "";
}

playGame();