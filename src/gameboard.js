const Ship = require('./ship');
const shipData = require('./shipData.json');

class Gameboard {
    constructor() {
        this.locations = [];
        this.missedShots = [];
        this.ships = [];
    }

    locationInit() {
        for(let i = 0; i < 100; i++) {
            this.locations.push({
                id: i,
                isHit: false,
                shipName: null
            });
        }
    }

    shipInit() {
        shipData.ships.forEach(ship => {
            const newShip = new Ship(ship.shipName, ship.shipLength);
            this.ships.push(newShip);
        });
    }

    placeShip(ship, location) {
        for(let i = 0; i < ship.shipLength; i++) {
            if(ship.direction === 'x') {
                this.locations[location + i].shipName = ship.shipName;
            } else {
                this.locations[location + i * 10].shipName = ship.shipName;
            }
        }
    }

    recieveAttack(location) {
        this.locations[location].isHit = true;
        if(this.locations[location].shipName) {
            this.ships.forEach(ship => {
                if(ship.shipName === this.locations[location].shipName) {
                    ship.hit();
                }
            });
        } else {
            this.missedShots.push(this.locations[location].id)
        }
    }

    checkAllSunk() {
        let allSunk = true;
        this.ships.every(ship => {
            if(ship.sunk === false) {
                allSunk = false;
                return false;
            }
        })
        return allSunk;
    }
}

module.exports = Gameboard;