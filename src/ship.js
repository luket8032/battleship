class Ship {
    constructor(shipName ,shipLength, numHit = 0, sunk = false, direction = 'x') {
        this.shipName = shipName;
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

module.exports = Ship;