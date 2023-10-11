// let create a function to get the computer choices.

/* I can't get this function (getComputerChoice) with switch, to:
-create a continue loops if the "ValidInput" is false, 
-Coverte the choice toLowerCase.
- And Most importantly I don't know why.
(What I mean: is I can't make the playerChoice function works for the getComputerChoice function(with switch))
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
}*/
const options = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const choices = options[Math.floor(Math.random() * options.length)];
    return choices;
}

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


function playerChoice(){
    let validInput = false;
    while(validInput == false){
        const choice = prompt("Rock, Paper and Scissors...")
        if(choice == null){
            continue;
            // This part of the  function ensure that everytime 
            //the Input is false, to repeat the process.
        }
        const choiceInLowerCase = choice.toLowerCase();
        if(options.includes(choiceInLowerCase)){
            validInput == true;
            return choiceInLowerCase;
            // This part ensure that the Input are all transfered in lowerCase,
            // and verify that the Input is conforme to the existant choice we have.
        }
    }
}


function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerChoice();
        const computerSelection = getComputerChoice();
        console.log(playerRound(playerSelection,computerSelection));
        
    }
}

game();