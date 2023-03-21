let currentPlayer = 1;
let gridItem = document.getElementsByClassName('grid-item');
let gridLine = document.getElementsByClassName('grid-line');



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
            if (currentPlayer == player1.playerNumber()) {
                gridItem[i].textContent = player1.mark;
            } else if (currentPlayer == player2.playerNumber()){
                gridItem[i].textContent = player2.mark;
            } else {
                console.log('error')
            }
            changePlayer()
        }

        
    });
};

// Reset board
function reset () {
    for (let i = 0; i < gridItem.length; i++){
        gridItem[i].textContent = '';
    };
    currentPlayer = 1;
    gameBoard.playerBoardCounter.textContent = currentPlayer;
    x.observe(gridItem[0], {childList: true, subtree: true,
    attributes: true});
    
    x.observe(gridItem[1], {childList: true, subtree: true,
    attributes: true});
    
    x.observe(gridItem[2], {childList: true, subtree: true,
    attributes: true});
    
    x.observe(gridItem[3], {childList: true, subtree: true,
    attributes: true});
    
    x.observe(gridItem[4], {childList: true, subtree: true,
    attributes: true});
    
    x.observe(gridItem[5], {childList: true, subtree: true,
    attributes: true});
    
    x.observe(gridItem[6], {childList: true, subtree: true,
    attributes: true});
    
    x.observe(gridItem[7], {childList: true, subtree: true,
    attributes: true});
    
    x.observe(gridItem[8], {childList: true, subtree: true,
    attributes: true});
};

//Winning Logic
// if (gridLine[0].children[0].textContent == player1.mark && gridLine[0].children[1] == player1.mark && gridLine[0].children[2] == player1.mark) {
//     console.log('won')
// }

// var x = new MutationObserver(function (e) {
//     if (gridLine[0].children[0].textContent == player1.mark && gridLine[0].children[1] == player1.mark && gridLine[0].children[2] == player1.mark){
//         console.log('hello')
//     }
//   });
  
//   x.observe(gridLine[0].children[0], { childList: true});


var x = new MutationObserver(e => {
    //Straight Across
    if (gridItem[0].textContent == player1.mark && gridItem[1].textContent == player1.mark && gridItem[2].textContent == player1.mark || gridItem[0].textContent == player2.mark && gridItem[1].textContent == player2.mark && gridItem[2].textContent == player2.mark ){
        console.log(`PLAYER ${gridItem[0].textContent == 'o' ? 2 : 1} WINS!!!`);
        x.disconnect();
    }
    else if (gridItem[3].textContent == player1.mark && gridItem[4].textContent == player1.mark && gridItem[5].textContent == player1.mark || gridItem[3].textContent == player2.mark && gridItem[4].textContent == player2.mark && gridItem[5].textContent == player2.mark){
        console.log(`PLAYER ${gridItem[3].textContent == 'o' ? 2 : 1} WINS!!!`);
        x.disconnect();
    }
    else if (gridItem[6].textContent == player1.mark && gridItem[7].textContent == player1.mark && gridItem[8].textContent == player1.mark || gridItem[6].textContent == player2.mark && gridItem[7].textContent == player2.mark && gridItem[8].textContent == player2.mark){
        console.log(`PLAYER ${gridItem[6].textContent == 'o' ? 2 : 1} WINS!!!`);
        x.disconnect();
    }

    //Straight Down
    if (gridItem[0].textContent == player1.mark && gridItem[3].textContent == player1.mark && gridItem[6].textContent == player1.mark || gridItem[0].textContent == player2.mark && gridItem[3].textContent == player2.mark && gridItem[6].textContent == player2.mark){
        console.log(`PLAYER ${gridItem[0].textContent == 'o' ? 2 : 1} WINS!!!`);
        x.disconnect();
    }
    else if (gridItem[1].textContent == player1.mark && gridItem[4].textContent == player1.mark && gridItem[7].textContent == player1.mark || gridItem[1].textContent == player2.mark && gridItem[4].textContent == player2.mark && gridItem[7].textContent == player2.mark){
        console.log(`PLAYER ${gridItem[1].textContent == 'o' ? 2 : 1} WINS!!!`);
        x.disconnect();
    }
    else if (gridItem[2].textContent == player1.mark && gridItem[5].textContent == player1.mark && gridItem[8].textContent == player1.mark || gridItem[2].textContent == player2.mark && gridItem[5].textContent == player2.mark && gridItem[8].textContent == player2.mark){
        console.log(`PLAYER ${gridItem[2].textContent == 'o' ? 2 : 1} WINS!!!`);
        x.disconnect();
    }

    // //Diagonal
    if (gridItem[0].textContent == player1.mark && gridItem[4].textContent == player1.mark && gridItem[8].textContent == player1.mark || gridItem[0].textContent == player2.mark && gridItem[4].textContent == player2.mark && gridItem[8].textContent == player2.mark ){
        console.log(`PLAYER ${gridItem[0].textContent == 'o' ? 2 : 1} WINS!!!`);
        x.disconnect();
    }
    else if (gridItem[2].textContent == player1.mark && gridItem[4].textContent == player1.mark && gridItem[6].textContent == player1.mark || gridItem[2].textContent == player2.mark && gridItem[4].textContent == player2.mark && gridItem[6].textContent == player2.mark){
        console.log(`PLAYER ${gridItem[2].textContent == 'o' ? 2 : 1} WINS!!!`);
        x.disconnect();
    }
});

x.observe(gridItem[0], {childList: true, subtree: true,
attributes: true});

x.observe(gridItem[1], {childList: true, subtree: true,
attributes: true});

x.observe(gridItem[2], {childList: true, subtree: true,
attributes: true});

x.observe(gridItem[3], {childList: true, subtree: true,
attributes: true});

x.observe(gridItem[4], {childList: true, subtree: true,
attributes: true});

x.observe(gridItem[5], {childList: true, subtree: true,
attributes: true});

x.observe(gridItem[6], {childList: true, subtree: true,
attributes: true});

x.observe(gridItem[7], {childList: true, subtree: true,
attributes: true});

x.observe(gridItem[8], {childList: true, subtree: true,
attributes: true});