const Ship = require('../ship');

test('Hit increase by 1', () => {
    const testShip = Ship(3);
    expect(testShip.hit()).toBe(testShip.numHit + 1);
})

test('Sunk if numHit = shipLength', () => {
    const testShip = Ship(3, 3);
    expect(testShip.isSunk()).toBe(true);
})

test('Sunk if numHit != shipLength', () => {
    const testShip = Ship(3, 2);
    expect(testShip.isSunk()).toBe(false);
})

