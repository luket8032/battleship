const Gameboard = require('../gameboard');

const testBoard = new Gameboard();
testBoard.locationInit();
testBoard.shipInit();

test('placeShip places ship at given location', () => {
    testBoard.placeShip(testBoard.ships[0], 3);
    expect(testBoard.locations[3].shipName).toBe('Destroyer')
})

test('placeShip places ship vertiically if ship directions != x', () => {
    testBoard.ships[1].direction = 'y';
    testBoard.placeShip(testBoard.ships[1], 25);
    expect(testBoard.locations[35].shipName && testBoard.locations[45].shipName).toBe('Submarine');
})
