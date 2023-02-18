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
    }

    // game()
    function game() {
        // TODO
        playRound(playerSelection, computerSelection)
    }
})