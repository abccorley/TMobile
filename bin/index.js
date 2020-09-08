#!/usr/bin/env node
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var totalMoves = 1;
var tictactoeBoard = [['-','-','-'],['-','-','-'],['-','-','-']];

updateBoard();
playerOne();

function updateBoard(position) {
    if (position) {
        console.log("position passed");
    }
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            rl.write(tictactoeBoard[row][col]);
            if (col !== 2) {
                rl.write(",");
            }
        }
        rl.write("\n");
    }
}

function playerOne() {
    rl.question("Player 1, enter a position\n", function(position) {
        if (totalMoves === 9) {
            forceEndGame(1);
        } else if (totalMoves >= 5 && checkVictory()) {
            declareWinner(1);
        } else {
            totalMoves++;
            rl.write("\n");
            updateBoard(position);
            playerTwo();
        }
    });
};

function playerTwo() {
    rl.question("Player 2, enter a position\n", function(position) {
        if (totalMoves === 9) {
            forceEndGame(2);
        } else if (totalMoves >= 5 && checkVictory()) {
            declareWinner(2);
        } else {
            totalMoves++;
            rl.write("\n");
            updateBoard(position);
            playerOne();
        }
    });
};

function checkVictory() {
    return true;
}

function forceEndGame(lastPlayer) {
    if (checkVictory()) {
        declareWinner(lastPlayer);
    } else {
        rl.write("Tie! Game Over");
        rl.close();
    }
}

function declareWinner(winner) {
    rl.write(`Player ${winner} is the winner!`);
    rl.close();
}