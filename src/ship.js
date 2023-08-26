const Ship = (shipLength, numHit = 0, sunk = false) => {

    const hit = () => {
        numHit += 1;
        return numHit;
    }

    const isSunk = () => {
        return (shipLength === numHit)
    }

    return { shipLength, numHit, sunk, hit, isSunk }
}

module.exports = Ship;