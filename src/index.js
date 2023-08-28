import './style.css';

const domStuff = require('./domStuff');
const Gameboard = require('./gameboard');

const dom = domStuff();

const playerBoard = new Gameboard();
const computerBoard = new Gameboard();
playerBoard.init();
computerBoard.init();
dom.renderBoard(playerBoard);
dom.renderBoard(computerBoard);



