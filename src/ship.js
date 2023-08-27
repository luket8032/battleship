class Ship {
    constructor(shipLength, numHit = 0, sunk = false) {
        this.shipLength = shipLength;
        this.numHit = numHit;
        this.sunk = sunk
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