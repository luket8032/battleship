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
    }

    function playerTurn() {
        // code for player to attack computer
    }

    function computerTurn() {
        // code for computer to attack player
    }

    function endGame(board1, board2) {
        if(board1.checkAllSunk) return 'You won! So epic mode...';
        if(board2.checkAllSunk) return 'You lost. You stink...'
    }

    return { gameInit, playerTurn, computerTurn, endGame, }
}

module.exports = game;