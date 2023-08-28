class Ship {
    constructor(shipId ,shipLength, numHit = 0, sunk = false, direction = 'x') {
        this.shipId = shipId;
        this.shipLength = shipLength;
        this.numHit = numHit;
        this.sunk = sunk;
        this.direction = direction;
    }

    hit() {
        if(!this.sunk) {
            this.numHit++;
            this.sunk = this.isSunk();
        }
    }

    isSunk() {
        return (this.shipLength === this.numHit)
    }
}

const test = new Ship(2)

module.exports = Ship;