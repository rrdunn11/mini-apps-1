/*
Notes:
    Grid of 3x3
    Each square can be blank, X, or O
    Alternate turns between players (X or O)
    Check if there is a winner after each click
        If true, display winner
        If false, continue
        It is possible to not have a winner
    Reset button to clear the state
*/

//prompt name

var player1 = prompt('Player1 name:');
var player2 = prompt('Player2 name:');

//3x3 board
var board = [[0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0]];
//blank: 0
//X:1
//O:2


//track previous winners
var scoreBoard = {"1": 0, "2": 0};
var prevWinner = "";


//keep track of who's turn is next
var turn = true;
//true is X's turn
//false is O's turn


//handle click events
function clickEvent(elem) {
    var coord = elem.id.split(",").map(value => Number(value));
    var row = coord[0];
    var col = coord[1];
    if (turn && board[row][col] === 0) {
        board[row][col] = 1;
        elem.classList.add('X');
        elem.innerHTML = player1;
    } else if (board[row][col] === 0) {
        board[row][col] = 2;
        elem.classList.add('O');
        elem.innerHTML = player2;
    } else {
        alert('Cannot change cell!')
        return;
    }
    console.log(board);
    var player = turn ? 1 : 2;
    var playerXO = player === 1 ? "X" : "O";
    if (checkWinner(row, col, player)) {
        prevWinner = playerXO;
        scoreBoard[player.toString()]++;
        var scoreX = document.getElementById("X");
        scoreX.innerHTML = "X: " + scoreBoard["1"];
        var scoreO = document.getElementById("O");
        scoreO.innerHTML = "O: " + scoreBoard["2"];
        var win = document.getElementById("lastWinner");
        win.innerHTML = "Last Winner: " + prevWinner;
        console.log(prevWinner,scoreBoard);
        alert(`${playerXO} is the winner!`)
        if (prevWinner === "X") {
            turn = true;
        } else {
            turn = false;
        }
        return;
    }
    turn = !turn;
}


function checkWinner(r, c, player) {
    if (checkHor(r, player) || checkVer(c, player) || checkMajDia(r, c, player) || checkMinDia(r, c, player)) {
        return true;
    } else {
        return false;
    }
}

function checkHor(r, player) {
    var total = 0;
    for (let c = 0; c < board.length; c++) {
        if (player === board[r][c]) {
            total++;
        }
        if (total === 3) {
            return true;
        }
    }
    return false;
}

function checkVer(c,player) {
    var total = 0;
    for (let r = 0; r < board.length; r++) {
        if (player === board[r][c]) {
            total++;
        }
        if (total === 3) {
            return true;
        }
    }
    return false;
}

function checkMajDia(r,c, player) {
    if ( r === c) {
        var total = 0;
        for (let i = 0; i < board.length; i++) {
            if (board[i][i] === player) {
                total++;
            }
            if (total === 3) {
                return true;
            }
        }
    }
    return false;
}

function checkMinDia(r,c, player) {
    if ( r + c === 2) {
        var total = 0;
        for (let i = 0; i < board.length; i++) {
            if (board[0+i][2-i] === player) {
                total++;
            }
            if (total === 3){
                return true;
            }
        }
    }
    return false;
}


function resetGame() {
    board = [[0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0]];

    var tableCells = document.querySelectorAll("td");
    tableCells.forEach(elem => {
        elem.innerHTML = "";
        elem.removeAttribute("class");
    });
}
