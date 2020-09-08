const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var totalMoves = 1;
var tictactoeBoard = [['-','-','-'],['-','-','-'],['-','-','-']];

printBoard();
playerOne();

function updateBoard(position, player) {
    let XYArray = position.split(",");
    if (player === 1) {
        tictactoeBoard[XYArray[0]-1][XYArray[1]-1] = 'X';
    } else {
        tictactoeBoard[XYArray[0]-1][XYArray[1]-1] = 'O';
    }
    printBoard();
}

function printBoard() {
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
        let valid = checkValidPosition(position);
        if (!valid) {
            playerOne();
        } else {
            updateBoard(position, 1);
            if (totalMoves === 9) {
                forceEndGame(1);
            } else if (checkVictory()) {
                declareWinner(1);
            } else {
                totalMoves++;
                rl.write("\n");
                playerTwo();
            }
        }
    });
};

function playerTwo() {
    rl.question("Player 2, enter a position\n", function(position) {
        let valid = checkValidPosition(position);
        if (!valid) {
            playerTwo();
        } else {
            updateBoard(position, 2);
            if (totalMoves === 9) {
                forceEndGame(2);
            } else if (checkVictory()) {
                declareWinner(2);
            } else {
                totalMoves++;
                rl.write("\n");
                playerOne();
            }
        }
    });
};

function checkValidPosition(position) {
    let valid = true;
    let XYArray = position.split(",");

    if (position.length !== 3) {
        valid = false;
    }
    if (XYArray.length !== 2) {
        valid = false;
    }
    if (XYArray.length === 2) {
        if (XYArray[0] < 1 || XYArray[0] > 3) {
            valid = false;
        }
        if (XYArray[1] < 1 || XYArray[1] > 3) {
            valid = false;
        }
    }
    if (!valid) {
        rl.write("Not a valid position. Try again.\n");
    }

    return valid;
}

function checkVictory() {
    let victory = false;

    if (tictactoeBoard[0][0] !== '-' && tictactoeBoard[0][0] === tictactoeBoard[0][1] && tictactoeBoard[0][0] === tictactoeBoard[0][2]) {
        victory = true;
    }
    if (tictactoeBoard[1][0] !== '-' && tictactoeBoard[1][0] === tictactoeBoard[1][1] && tictactoeBoard[1][0] === tictactoeBoard[1][2]) {
        victory = true;
    }
    if (tictactoeBoard[2][0] !== '-' && tictactoeBoard[2][0] === tictactoeBoard[2][1] && tictactoeBoard[2][0] === tictactoeBoard[2][2]) {
        victory = true;
    }
    if (tictactoeBoard[0][0] !== '-' && tictactoeBoard[0][0] === tictactoeBoard[1][0] && tictactoeBoard[0][0] === tictactoeBoard[2][0]) {
        victory = true;
    }
    if (tictactoeBoard[0][1] !== '-' && tictactoeBoard[0][1] === tictactoeBoard[1][1] && tictactoeBoard[0][1] === tictactoeBoard[2][1]) {
        victory = true;
    }
    if (tictactoeBoard[0][2] !== '-' && tictactoeBoard[0][2] === tictactoeBoard[1][2] && tictactoeBoard[0][2] === tictactoeBoard[2][2]) {
        victory = true;
    }
    if (tictactoeBoard[0][0] !== '-' && tictactoeBoard[0][0] === tictactoeBoard[1][1] && tictactoeBoard[0][0] === tictactoeBoard[2][2]) {
        victory = true;
    }
    if (tictactoeBoard[0][2] !== '-' && tictactoeBoard[0][2] === tictactoeBoard[1][1] && tictactoeBoard[0][2] === tictactoeBoard[2][0]) {
        victory = true;
    }

    return victory;
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

exports.checkValidPosition = checkValidPosition;