const Ship = require('./ship');

class Gameboard {
    constructor() {
        this.locations = [];
    }

    locationInit() {
        for(let i = 1; i <= 100; i++) {
            this.locations.push({
                id: i, // temp property to make sure placeShip is placing ships in the right location
                isHit: false,
                shipId: null
            });
        }
    }

    placeShip(ship, location) {
        for(let i = 0; i < ship.shipLength; i++) {
            if(ship.direction === 'x') {
                this.locations[location + i - 1].shipId = ship.shipId;
            } else {
                this.locations[location + i * 10 - 1].shipId = ship.shipId;
            }
        }
    }

    // recieveAttack(location) {
        
    // }
}

const test = new Gameboard;
const testship = new Ship(1, 3, 0, false, 'x');
test.locationInit();
test.placeShip(testship, 3);

console.log(test)


module.exports = Gameboard;