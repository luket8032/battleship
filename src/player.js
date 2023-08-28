class Player {
    constructor(playerName) {
        this.playerName = playerName
    }

    shoot(board, location) {
        board.recieveAttack(location);
    }
}

module.exports = Player;