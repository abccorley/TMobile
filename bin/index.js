#!/usr/bin/env node
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var totalMoves = 1;

playerOne();

function playerOne() {
    rl.question("Player 1, enter a position\n", function(position) {
        if (totalMoves >= 5 && checkVictory()) {
            declareWinner(1);
        } else {
            totalMoves++;
            playerTwo();
        }
    });
};

function playerTwo() {
    rl.question("Player 2, enter a position\n", function(position) {
        if (totalMoves >= 5 && checkVictory()) {
            declareWinner(2);
        } else {
            totalMoves++;
            playerOne();
        }
    });
};

function checkVictory() {
    return true;
}

function declareWinner(winner) {
    rl.write(`Player ${winner} is the winner!`);
    rl.close();
}