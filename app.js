let currentPlayer = 1;
let gridItem = document.getElementsByClassName('grid-item');




// Make gameboard a module IIFE
const gameBoard = (() => {
    let board = [];
    let playerBoardCounter = document.getElementById('player_board_counter');
    playerBoardCounter.textContent = currentPlayer

    return {board, playerBoardCounter};
})();


// Make players a factory function
const createPlayer = (playerNum) => {

    let playerNumber = () => playerNum;

    let mark;

    if (playerNum == 1) {
        mark = 'x';
    } else {
        mark = 'o';
    }

    return {mark, playerNumber};
};

const player1 = createPlayer(1);

const player2 = createPlayer(2);


// Switch player
function changePlayer() {
    if (currentPlayer == 1){
        currentPlayer = 2;
    } else if (currentPlayer == 2){
        currentPlayer = 1;
    }
    gameBoard.playerBoardCounter.textContent = currentPlayer;
}



for (let i = 0; i < gridItem.length; i++){
    gridItem[i].addEventListener('click', () => {
        if(gridItem[i].textContent){
            return;
        } else {
            changePlayer()
            gridItem[i].textContent = player1.mark;
        }
    });
};

// Reset board
function reset () {
    for (let i = 0; i < gridItem.length; i++){
        gridItem[i].textContent = '';
    };
}
