// let create a function to get the computer choices.

function getComputerChoice() {
    random = Math.floor(Math.random() * 3) + 1;
    
    switch (random) {
        case 1:
            computer = "Rock"
            break;
        case 2:
            computer =  "Paper";
            break;
        case 3:
            computer =  "Scissors";
            break;
    }
    return computer;
}
/*const options = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}*/

function checkgame(playerSelection, computerSelection) {

    if (playerSelection == computerSelection){
        return "Tie";
    } 
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playerRound(playerSelection, computerSelection){
    const result = checkgame(playerSelection, computerSelection);
    if(result == "Tie"){
        return `It's a Tie! ${playerSelection} is equal to ${computerSelection}`
    }
    else if(result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}




function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        console.log(playerRound(playerSelection,computerSelection));
        
    }
}

game();