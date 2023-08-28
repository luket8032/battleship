const Ship = require('../ship');

test('Hit increase by 1', () => {
    const testShip = new Ship(3);
    testShip.hit();
    expect(testShip.numHit).toBe(1);
});

test('Dont increase hit if ship sunk', () => {
    const testShip = new Ship(3, 3, true);
    testShip.hit();
    expect(testShip.numHit).toBe(3);
});

test('Sunk if numHit === shipLength', () => {
    const testShip = new Ship(3, 3);
    expect(testShip.isSunk()).toBe(true);
});

test('Sunk if numHit != shipLength', () => {
    const testShip = new Ship(3, 2);
    expect(testShip.isSunk()).toBe(false);
});

