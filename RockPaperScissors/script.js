let box = document.querySelector(".box");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let output = document.querySelector(".output");

let player1Choice = null;
let player2Choice = null;

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

    rock.addEventListener('click', (e) => {
        e.preventDefault();
        if (player1Choice === null) {
            player1Choice = 'rock';
        } else if (player2Choice === null) {
            player2Choice = 'rock';
        }
        game();
    });

    paper.addEventListener('click', (e) => {
        e.preventDefault();
        if (player1Choice === null) {
            player1Choice = 'paper';
        } else if (player2Choice === null) {
            player2Choice = 'paper';
        }
        game();
    });

    scissors.addEventListener('click', (e) => {
        e.preventDefault();
        if (player1Choice === null) {
            player1Choice = 'scissors';
        } else if (player2Choice === null) {
            player2Choice = 'scissors';
        }
        game();
    });

    function game() {
        let result = "";

        if (player1Choice !== null && player2Choice !== null) {
            if (player1Choice === player2Choice) {
                result = "It's a tie!";
            } else if (
                (player1Choice === 'rock' && player2Choice === 'scissors') ||
                (player1Choice === 'scissors' && player2Choice === 'paper') ||
                (player1Choice === 'paper' && player2Choice === 'rock')
            ) {
                result = "Player 1 wins!";
            } else {
                result = "Player 2 wins!";
            }

            output.innerHTML = result;
            setTimeout(resetGame, 2000); 
        }
    }

    function resetGame() {
        player1Choice = null;
        player2Choice = null;
        output.innerHTML = "";
    }
});

