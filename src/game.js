const domStuff = require('./domStuff');
const dom = domStuff();

const game = () => {
    function gameInit(playerBoard, computerBoard) {
        // code to make both playerboards and place ships
        playerBoard.init();
        computerBoard.init();
        // temp manual ship placement
        playerBoard.placeShip(playerBoard.ships[0], 3);
        playerBoard.placeShip(playerBoard.ships[1], 23);
        playerBoard.placeShip(playerBoard.ships[2], 53);
        playerBoard.placeShip(playerBoard.ships[3], 73);
        playerBoard.placeShip(playerBoard.ships[4], 93);

        // temp manual ship placement
        computerBoard.placeShip(computerBoard.ships[0], 3);
        computerBoard.placeShip(computerBoard.ships[1], 23);
        computerBoard.placeShip(computerBoard.ships[2], 53);
        computerBoard.placeShip(computerBoard.ships[3], 73);
        computerBoard.placeShip(computerBoard.ships[4], 93);

        dom.renderBoard(playerBoard);
        dom.renderBoard(computerBoard);

        playGame(playerBoard, computerBoard);
    }

    function playGame(playerBoard, computerBoard) {
        let whoTurn = 'player'
        let isOver = false;

        function nextTurn() {
            if (isOver) return;

            if (whoTurn === 'player') {
                doTurn(computerBoard, 'computer', () => {
                    whoTurn = 'computer';
                    nextTurn();
                });
            } else if (whoTurn === 'computer') {
                doTurn(playerBoard, 'player', () => {
                    whoTurn = 'player';
                    nextTurn();
                });
            }
        }

        nextTurn();
    }

    function doTurn(targetBoard, target, callback) { // this function lets target board receive an x and calls receiveAttack(location)
        const boardsWrapper = document.getElementById('boardsWrapper')
        let board = boardsWrapper.querySelector(`.board-container[data-owner="${target}"]`);

        console.log(target)
        console.log(board);
        
        function handleClick(event) {
            const cell = event.target
            cell.textContent = 'X'
            targetBoard.recieveAttack(cell.getAttribute('data-location'));
            board.removeEventListener('click', handleClick);
            callback();
        }   

        board.addEventListener('click', handleClick);
    }

    // function computerTurn(playerBoard) {
    //     // code for computer to attack player
    // }

    function endGame(board1, board2) {
        if(board1.checkAllSunk) return 'You won! So epic mode...';
        if(board2.checkAllSunk) return 'You lost. You stink...'
    }

    return { gameInit, doTurn, endGame, }
}

module.exports = game;