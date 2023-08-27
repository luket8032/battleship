const Ship = require('./ship');

class Gameboard {
    constructor() {
        this.locations = []
    }

    locationInit() {
        for(let i = 1; i <= 100; i++) {
            this.locations.push({id: i, isShip: false, isHit: false})
        }
    }

    placeShip(ship, location) {
        for(let i = 0; i < ship.shipLength; i++) {
            if(ship.direction === 'x') {
                this.locations[location + i - 1].isShip = true;
            } else {
                this.locations[location + i * 10 - 1].isShip = true;
            }
        }
    }
}

const test = new Gameboard;
const testship = new Ship(3, 0, false, 'y');
test.locationInit()
test.placeShip(testship, 3)

console.log(test)


module.exports = Gameboard;