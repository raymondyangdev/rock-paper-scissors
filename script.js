window.addEventListener('load', function(){
    
    // getComputerChoice()
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors']
        const randomChoice = Math.floor(Math.random() * choices.length)
        const computerChoice = choices[randomChoice]

        return computerChoice;
    }

    // playRound(playerSelection, computerSelection)
    function playRound(playerSelection, computerSelection) {
        // TODO
        // Ask for user input and convert to lowercase
        // If playerSelection equals computerSelection, then it's a tie
        // If playerSelection is rock and computerSelection is paper, computer wins, else player wins
        // If playerSelection is paper and computerSelection is scissors, computer wins, else player wins
        // If playerSelection is scissors and computerSelection is rock, computer wins, else player wins

    }

    // game()
    function game() {
        // TODO
        // Play round five times
        // Keep track of player and computer scores
        // Determine winner at the end of five rounds
        for (let round = 0; round < 5; round++) {
            playRound(playerSelection, computerSelection)
        }
    }
})