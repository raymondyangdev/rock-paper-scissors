window.addEventListener('load', function () {
    // getComputerChoice()
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomChoice = Math.floor(Math.random() * choices.length);
        const computerChoice = choices[randomChoice];

        return computerChoice;
    }

    // Declare player score and computer score in global scope to keep track of score
    let computerScore = 0;
    let playerScore = 0;

    // Prints the result of the round to the console when the player loses
    // Increases the computer's score by 1
    function playerLoses(playerSelection, computerSelection) {
        console.log(
            `You lose! ${computerSelection
                .charAt(0)
                .toUpperCase()}${computerSelection.slice(
                1
            )} beats ${playerSelection.toLowerCase()}.`
        );

        computerScore++;
    }

    // Prints the result of the round to the console when the player wins
    // Increases the player's score by 1
    function playerWins(playerSelection, computerSelection) {
        console.log(
            `You win! ${playerSelection
                .charAt(0)
                .toUpperCase()}${playerSelection
                .slice(1)
                .toLowerCase()} beats ${computerSelection}.`
        );

        playerScore++;
    }

    // playRound(playerSelection, computerSelection)
    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === computerSelection) {
            console.log(`It's a tie!`);
        } else if (
            playerSelection.toLowerCase() === 'rock' &&
            computerSelection === 'paper'
        ) {
            playerLoses(playerSelection, computerSelection);
        } else if (
            playerSelection.toLowerCase() === 'paper' &&
            computerSelection === 'scissors'
        ) {
            playerLoses(playerSelection, computerSelection);
        } else if (
            playerSelection.toLowerCase() === 'scissors' &&
            computerSelection === 'rock'
        ) {
            playerLoses(playerSelection, computerSelection);
        } else {
            playerWins(playerSelection, computerSelection);
        }
    }

    // game()
    function game() {
        // TODO
        // Play round five times
        // Keep track of player and computer scores
        // Determine winner at the end of five rounds
        for (let round = 0; round < 5; round++) {
            playRound(playerSelection, getComputerChoice());
        }
    }
});
