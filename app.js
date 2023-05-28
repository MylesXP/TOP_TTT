let currentPlayer = 1;
let gridItem = document.getElementsByClassName('grid-item');
let gridLine = document.getElementsByClassName('grid-line');
let resetButton = document.getElementById('reset');
let overlay = document.getElementById('overlay')
let p1Form = document.getElementById('p1_input')
let p2Form = document.getElementById('p2_input');
let p1InputField = document.getElementById('p1_input_field');
let p2InputField = document.getElementById('p2_input_field');
let p1SubmitButton = document.getElementById('p1_input_button');
let p2SubmitButton = document.getElementById('p2_input_button');
let p1InputErrorMessage = document.getElementsByClassName('input-error-message')[0];
let p2InputErrorMessage = document.getElementsByClassName('input-error-message')[1];
let playerNamePattern = /^(?!\s*$).+/;
let gameEndMarker = 0

// Make gameboard a module IIFE
const gameBoard = (() => {
    let board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    let playerBoardCounter = document.getElementById('player_board_counter');
    return {board, playerBoardCounter};
})();


// Make players a factory function
const createPlayer = (playerNum) => {

    let playerNumber = () => playerNum;

    let playerName;

    let mark;

    if (playerNum == 1) {
        mark = 'x';
    } else {
        mark = 'o';
    }

    return {mark, playerNumber, playerName};
};

const player1 = createPlayer(1);

const player2 = createPlayer(2);


// Switch player
function changePlayer() {
    if (currentPlayer == 1){
        currentPlayer = 2;
        gameBoard.playerBoardCounter.textContent = `${player2.playerName}'s Turn`;
    } else if (currentPlayer == 2){
        currentPlayer = 1;
        gameBoard.playerBoardCounter.textContent = `${player1.playerName}'s Turn`;
    }
}



// Start game
function start(){
    for (let i = 0; i < gridItem.length; i++){
        gridItem[i].addEventListener('click', () => {
            if(gridItem[i].textContent){
                return;
            } else {
                if (currentPlayer == player1.playerNumber() && gameEndMarker === 0) {
                    gridItem[i].textContent = player1.mark;
                    gameBoard.board[gridItem[i].parentNode.dataset.line].splice([...gridItem[i].parentNode.children].indexOf(gridItem[i]), 1, `${gridItem[i].textContent == 'o' ? 'o' : 'x'}`);
                } else if (currentPlayer == player2.playerNumber() && gameEndMarker === 0){
                    gridItem[i].textContent = player2.mark;
                    gameBoard.board[gridItem[i].parentNode.dataset.line].splice([...gridItem[i].parentNode.children].indexOf(gridItem[i]), 1, `${gridItem[i].textContent == 'o' ? 'o' : 'x'}`);
                } else {
                    return;
                }
                changePlayer();
            }
        });
    };
}

start();


// Reset board
function reset () {
    gameEndMarker = 0
    for (let i = 0; i < gridItem.length; i++){
        gridItem[i].textContent = '';
        gridItem[i].classList.remove('won');
        gameBoard.board[gridItem[i].parentNode.dataset.line].splice([...gridItem[i].parentNode.children].indexOf(gridItem[i]), 1, `0`);
    };
    gameBoard.playerBoardCounter.classList.remove('won');
    currentPlayer = 1;
    gameBoard.playerBoardCounter.textContent = `${player1.playerName}'s Turn`;
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

resetButton.addEventListener('click', () => {
    reset();
});

p1SubmitButton.addEventListener('click', () => {
    if (playerNamePattern.test(p1InputField.value)) {
        p1Form.classList.add("hide")
        p2Form.classList.add("show");
        player1.playerName = p1InputField.value
    } else {
        p1InputField.classList.add('error')
        p1InputErrorMessage.classList.add('show');
        p1InputErrorMessage.classList.remove('hide');
    }
    
});

p2SubmitButton.addEventListener('click', () => {
    if (playerNamePattern.test(p2InputField.value)) {
        overlay.classList.add('hide')
        player2.playerName = p2InputField.value
        gameBoard.playerBoardCounter.textContent = `${player1.playerName}'s Turn`;
    } else {
        p2InputField.classList.add('error');
        p2InputErrorMessage.classList.add('show');
        p2InputErrorMessage.classList.remove('hide');
    }
});

//Winning Logic
var x = new MutationObserver(e => {
    //Straight Across
    if (gridItem[0].textContent == player1.mark && gridItem[1].textContent == player1.mark && gridItem[2].textContent == player1.mark || gridItem[0].textContent == player2.mark && gridItem[1].textContent == player2.mark && gridItem[2].textContent == player2.mark ){
        console.log(`${gridItem[0].textContent == 'o' ? player2.playerName : player1.playerName} Wins!!!`);
        gridItem[0].classList.add('won');
        gridItem[1].classList.add('won');
        gridItem[2].classList.add('won');
        gameBoard.playerBoardCounter.textContent = `${gridItem[0].textContent == 'o' ? player2.playerName : player1.playerName} Wins!`;
        gameBoard.playerBoardCounter.classList.add('won');
        gameEndMarker = 1;
        x.disconnect();
    }
    else if (gridItem[3].textContent == player1.mark && gridItem[4].textContent == player1.mark && gridItem[5].textContent == player1.mark || gridItem[3].textContent == player2.mark && gridItem[4].textContent == player2.mark && gridItem[5].textContent == player2.mark){
        console.log(`${gridItem[3].textContent == 'o' ? player2.playerName : player1.playerName} Wins!!!`);
        gridItem[3].classList.add('won');
        gridItem[4].classList.add('won');
        gridItem[5].classList.add('won');
        gameBoard.playerBoardCounter.textContent = `${gridItem[3].textContent == 'o' ? player2.playerName : player1.playerName} Wins!`;
        gameBoard.playerBoardCounter.classList.add('won');
        gameEndMarker = 1;
        x.disconnect();
    }
    else if (gridItem[6].textContent == player1.mark && gridItem[7].textContent == player1.mark && gridItem[8].textContent == player1.mark || gridItem[6].textContent == player2.mark && gridItem[7].textContent == player2.mark && gridItem[8].textContent == player2.mark){
        console.log(`${gridItem[6].textContent == 'o' ? player2.playerName : player1.playerName} Wins!!!`);
        gridItem[6].classList.add('won');
        gridItem[7].classList.add('won');
        gridItem[8].classList.add('won');
        gameBoard.playerBoardCounter.textContent = `${gridItem[6].textContent == 'o' ? player2.playerName : player1.playerName} Wins!`;
        gameBoard.playerBoardCounter.classList.add('won');
        gameEndMarker = 1;
        x.disconnect();
    }

    //Straight Down
    else if (gridItem[0].textContent == player1.mark && gridItem[3].textContent == player1.mark && gridItem[6].textContent == player1.mark || gridItem[0].textContent == player2.mark && gridItem[3].textContent == player2.mark && gridItem[6].textContent == player2.mark){
        console.log(`${gridItem[0].textContent == 'o' ? player2.playerName : player1.playerName} Wins!!!`);
        gridItem[0].classList.add('won');
        gridItem[3].classList.add('won');
        gridItem[6].classList.add('won');
        gameBoard.playerBoardCounter.textContent = `${gridItem[0].textContent == 'o' ? player2.playerName : player1.playerName} Wins!`;
        gameBoard.playerBoardCounter.classList.add('won');
        gameEndMarker = 1;
        x.disconnect();
    }
    else if (gridItem[1].textContent == player1.mark && gridItem[4].textContent == player1.mark && gridItem[7].textContent == player1.mark || gridItem[1].textContent == player2.mark && gridItem[4].textContent == player2.mark && gridItem[7].textContent == player2.mark){
        console.log(`${gridItem[1].textContent == 'o' ? player2.playerName : player1.playerName} Wins!!!`);
        gridItem[1].classList.add('won');
        gridItem[4].classList.add('won');
        gridItem[7].classList.add('won');
        gameBoard.playerBoardCounter.textContent = `${gridItem[1].textContent == 'o' ? player2.playerName : player1.playerName} Wins!`;
        gameBoard.playerBoardCounter.classList.add('won');
        gameEndMarker = 1;
        x.disconnect();
    }
    else if (gridItem[2].textContent == player1.mark && gridItem[5].textContent == player1.mark && gridItem[8].textContent == player1.mark || gridItem[2].textContent == player2.mark && gridItem[5].textContent == player2.mark && gridItem[8].textContent == player2.mark){
        console.log(`${gridItem[2].textContent == 'o' ? player2.playerName : player1.playerName} Wins!!!`);
        gridItem[2].classList.add('won');
        gridItem[5].classList.add('won');
        gridItem[8].classList.add('won');
        gameBoard.playerBoardCounter.textContent = `${gridItem[2].textContent == 'o' ? player2.playerName : player1.playerName} Wins!`;
        gameBoard.playerBoardCounter.classList.add('won');
        gameEndMarker = 1;
        x.disconnect();
    }

    //Diagonal
    else if (gridItem[0].textContent == player1.mark && gridItem[4].textContent == player1.mark && gridItem[8].textContent == player1.mark || gridItem[0].textContent == player2.mark && gridItem[4].textContent == player2.mark && gridItem[8].textContent == player2.mark ){
        console.log(`${gridItem[0].textContent == 'o' ? player2.playerName : player1.playerName} Wins!!!`);
        gridItem[0].classList.add('won');
        gridItem[4].classList.add('won');
        gridItem[8].classList.add('won');
        gameBoard.playerBoardCounter.textContent = `${gridItem[0].textContent == 'o' ? player2.playerName : player1.playerName} Wins!`;
        gameBoard.playerBoardCounter.classList.add('won');
        gameEndMarker = 1;
        x.disconnect();
    }
    else if (gridItem[2].textContent == player1.mark && gridItem[4].textContent == player1.mark && gridItem[6].textContent == player1.mark || gridItem[2].textContent == player2.mark && gridItem[4].textContent == player2.mark && gridItem[6].textContent == player2.mark){
        console.log(`${gridItem[2].textContent == 'o' ? player2.playerName : player1.playerName} Wins!!!`);
        gridItem[2].classList.add('won');
        gridItem[4].classList.add('won');
        gridItem[6].classList.add('won');
        gameBoard.playerBoardCounter.textContent = `${gridItem[2].textContent == 'o' ? player2.playerName : player1.playerName} Wins!`;
        gameBoard.playerBoardCounter.classList.add('won');
        gameEndMarker = 1;
        x.disconnect();
        return true
    }



    //Tie
    else if (gridItem[0].textContent && gridItem[1].textContent && gridItem[2].textContent && gridItem[3].textContent && gridItem[4].textContent && gridItem[5].textContent && gridItem[6].textContent && gridItem[7].textContent && gridItem[8].textContent){
        gameEndMarker = 1;
        gameBoard.playerBoardCounter.textContent = 'Tie!'
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