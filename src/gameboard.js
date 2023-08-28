const Ship = require('./ship');
const shipData = require('./shipData.json');

class Gameboard {
    constructor() {
        this.locations = [];
        this.missedShots = [];
        this.ships = [];
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

    shipInit() {
        shipData.ships.forEach(ship => {
            this.ships.push(ship)
        })
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

    recieveAttack(location) {
        this.locations[location].isHit = true;
        if(this.locations[location].shipId) {
            // somehow call hit() on ship thats in location
        } else {
            this.missedShots.push(this.locations[location].id)
        }
    }
}

const test = new Gameboard;
const testship = new Ship(1, 3, 0, false, 'x');
test.locationInit();
test.shipInit();
test.placeShip(testship, 3);

module.exports = Gameboard;