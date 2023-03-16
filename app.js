let currentPlayer = 1;
let gridItem = document.getElementsByClassName('grid-item');
let playerBoard = document.getElementById('player_board');
let playerBoardCounter = document.getElementById('player_board_counter');
playerBoardCounter.textContent = currentPlayer



// Make gameboard a module IIFE
const gameBoard = (() => {
    let board = [];
    return {board};
})();


// Make players a factory function
const createPlayer = (name,playerNum) => {

    let playerName = () => name;

    let playerNumber = () => playerNum;

    let mark;

    if (playerNum == 1) {
        mark = 'x'
    } else {
        mark = 'o';
    }

    return {mark, playerName, playerNumber};
};

// const playerStorage = () => {
//     let player1 =  
// }

const jeff = createPlayer('jeff',1);

const greg = createPlayer('greg',2);

console.log(jeff.mark);

// Switch player
function changePlayer() {
    if (currentPlayer == 1){
        currentPlayer = 2;
    } else if (currentPlayer == 2){
        currentPlayer = 1;
    }
    playerBoardCounter.textContent = currentPlayer;
}



for (let i = 0; i < gridItem.length; i++){
    gridItem[i].addEventListener('click', () => {
        if(gridItem[i].textContent){
            return;
        } else {
            changePlayer()
        }
        gridItem[i].textContent = greg.mark;
        
    });
    
};
