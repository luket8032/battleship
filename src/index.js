import './style.css';

const domStuff = require('./domStuff');
const Gameboard = require('./gameboard');

const dom = domStuff();

const playerBoard = new Gameboard(true);
const computerBoard = new Gameboard();
playerBoard.init();
computerBoard.init();
// temp manual ship placement
playerBoard.placeShip(playerBoard.ships[0], 3);
playerBoard.placeShip(playerBoard.ships[1], 23);
playerBoard.placeShip(playerBoard.ships[2], 53);
playerBoard.placeShip(playerBoard.ships[3], 73);
playerBoard.placeShip(playerBoard.ships[4], 93);

// temp manual ship placement
computerBoard.placeShip(computerBoard.ships[0], 3);
computerBoard.placeShip(computerBoard.ships[1], 23);
computerBoard.placeShip(computerBoard.ships[2], 53);
computerBoard.placeShip(computerBoard.ships[3], 73);
computerBoard.placeShip(computerBoard.ships[4], 93);

dom.renderBoard(playerBoard);
dom.renderBoard(computerBoard);



