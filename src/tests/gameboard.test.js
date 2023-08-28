const Gameboard = require('../gameboard');

const testBoard = new Gameboard();
testBoard.init();

test('placeShip places ship at given location', () => {
    testBoard.placeShip(testBoard.ships[0], 3);
    expect(testBoard.locations[3].shipName).toBe('Destroyer')
})

test('placeShip places ship vertiically if ship directions != x', () => {
    testBoard.ships[1].direction = 'y';
    testBoard.placeShip(testBoard.ships[1], 25);
    expect(testBoard.locations[35].shipName && testBoard.locations[45].shipName).toBe('Submarine');
})

test('recieveAttack changes isHit to true', () => {
    testBoard.recieveAttack(1);
    expect(testBoard.locations[1].isHit).toBe(true)
})

test('recieveAttack calls hit() on ship at location', () => {
    testBoard.recieveAttack(3); // ship placed from first test
    expect(testBoard.ships[0].numHit).toBe(1);
})

test('checkAllSunk return true if all ships sunk', () => {
    // manually sink all ships
    testBoard.ships.forEach(ship => {
        ship.sunk = true;
    });
    expect(testBoard.checkAllSunk()).toBe(true)
})

test('checkALlSunk returns false if at least one ship is not sunk', () => {
    // change one ship to not sunk
    testBoard.ships[0].sunk = false;
    expect(testBoard.checkAllSunk()).toBe(false)
})


