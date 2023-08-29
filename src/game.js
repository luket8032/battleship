const game = () => {
    function gameInit() {
        // code to make both playerboards and place ships
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