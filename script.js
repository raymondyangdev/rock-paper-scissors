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
        computerScore++;

        return `You lose! ${computerSelection
            .charAt(0)
            .toUpperCase()}${computerSelection.slice(
                1
            )} beats ${playerSelection.toLowerCase()}.`;
    }

    // Prints the result of the round to the console when the player wins
    // Increases the player's score by 1
    function playerWins(playerSelection, computerSelection) {
        playerScore++;

        return `You win! ${playerSelection
            .charAt(0)
            .toUpperCase()}${playerSelection
                .slice(1)
                .toLowerCase()} beats ${computerSelection}.`;
    }

    // Determine the winner of the game
    function determineGameWinner(playerScore, computerScore) {
        if (playerScore > computerScore) {
            return `You win the game with a score of ${playerScore}!`;
        } else {
            return `You lost! The computer won with a score of ${computerScore}!`;
        }
    }

    // Starts a round of rock, paper, scissors
    // Determine whether it's a tie, a win for the player or the computer based on standard rules
    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === computerSelection) {
            return `It's a tie!`;
        } else if (
            playerSelection.toLowerCase() === 'rock' &&
            computerSelection === 'paper'
        ) {
            return playerLoses(playerSelection, computerSelection);
        } else if (
            playerSelection.toLowerCase() === 'paper' &&
            computerSelection === 'scissors'
        ) {
            return playerLoses(playerSelection, computerSelection);
        } else if (
            playerSelection.toLowerCase() === 'scissors' &&
            computerSelection === 'rock'
        ) {
            return playerLoses(playerSelection, computerSelection);
        } else {
            return playerWins(playerSelection, computerSelection);
        }
    }

    // Starts game
    function game() {
        document.querySelector('.rock').addEventListener('click', function () {
            const gameResult = playRound('rock', getComputerChoice());
            printResults(gameResult);
        })

        document.querySelector('.paper').addEventListener('click', function () {
            const gameResult = playRound('paper', getComputerChoice());
            printResults(gameResult);
        })

        document.querySelector('.scissors').addEventListener('click', function () {
            const gameResult = playRound('scissors', getComputerChoice());
            printResults(gameResult);
        })

    }

    function printResults(result) {
        const gameResult = document.querySelector('.game-result');
        gameResult.innerHTML = result;
        document.querySelector('div.player-result span.result').innerHTML = playerScore;
        document.querySelector('div.computer-result span.result').innerHTML = computerScore;

        if (playerScore === 5 || computerScore === 5) {
            const gameWinner = determineGameWinner(playerScore, computerScore);
            gameResult.innerHTML = gameWinner;
        }
    }

    game();

});
