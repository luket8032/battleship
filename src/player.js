class Player {
    constructor(playerName) {
        this.playerName = playerName
    }

    attack(targetBoard, location) {
        targetBoard.recieveAttack(location);
    }

    autoAttack(targetBoard) {
        const randomLocation = Math.floor(Math.random() * 99)
        if(targetBoard.locations[randomLocation].isHit) {
            this.autoAttack(targetBoard)
        } else {
            targetBoard.recieveAttack(randomLocation);
        }
    }
}

module.exports = Player;