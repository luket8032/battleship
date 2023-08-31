const Ship = require('./ship');
const shipData = require('./shipData.json');

class Gameboard {
    constructor(isPlayer = false) {
        this.locations = [];
        this.missedShots = [];
        this.ships = [];
        this.cantPlace = [];
        this.isPlayer = isPlayer;
        this.numShips = 0;
    }

    init() {
        for(let i = 0; i < 100; i++) {
            this.locations.push({
                id: i,
                isHit: false,
                shipName: null
            });
        }
        
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

    placeRandom() {
        
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
        this.ships.forEach(ship => {
            if(ship.sunk === false) {
                allSunk = false
            }
        })
        return allSunk;
    }

    getCantPlace() {
        this.locations.forEach(location => {
            if(location.shipName) {
                if(!this.cantPlace.includes(location.id)) this.cantPlace.push(location.id);
                if(!this.cantPlace.includes(location.id + 1)) this.cantPlace.push(location.id + 1);
                if(!this.cantPlace.includes(location.id - 1)) this.cantPlace.push(location.id - 1);
                if(!this.cantPlace.includes(location.id + 10)) this.cantPlace.push(location.id + 10);
                if(!this.cantPlace.includes(location.id - 10)) this.cantPlace.push(location.id - 10);
            }
        })
        console.log(this.cantPlace)
    }
}

module.exports = Gameboard;