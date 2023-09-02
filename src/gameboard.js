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
        let currentShip = 0;

        while(currentShip !== 5) {
            const randomLocation = Math.floor(Math.random() * 99);
            if(Math.random() * 2 >= 1) {
                this.ships[currentShip].direction = 'y';
            }
            
            if(this.checkValidPlacement(this.ships[currentShip], randomLocation)) {
                this.placeShip(this.ships[currentShip], randomLocation)
                currentShip++;
            }
        }
    }

    checkValidPlacement(ship, location) {
        const remaining = ship.shipLength;
        const shipDirection = ship.direction;
        const currentLocation = parseInt(location);
        let canPlace = true;
        // check if overlap with already placed ship
        for(let i = 0; i < remaining; i++) {
            if(shipDirection === 'x') {
                const lastLocation = currentLocation + ship.shipLength;
                const nextLocation = currentLocation + i + 1;
                if(nextLocation % 10 === 0 && nextLocation !== lastLocation) {
                    canPlace = false;
                    break;
                }

                if(this.locations[currentLocation + i].shipName) {
                    canPlace = false;
                    break;
                }
            } else {
                // check for direction 'y'
                const lastLocation = currentLocation + (ship.shipLength * 10);
                const nextLocation = currentLocation + ((i + 1) * 10);
                if(nextLocation >= 100 && nextLocation !== lastLocation) {
                    canPlace = false;
                    break;
                }

                if(this.locations[currentLocation + (i * 10)].shipName) {
                    canPlace = false;
                    break;
                }    
            }
        }
        return canPlace;
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
    }

}

module.exports = Gameboard;