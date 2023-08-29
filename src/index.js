import './style.css';

const domStuff = require('./domStuff');
const Gameboard = require('./gameboard');
const gameFns = require('./game');

const game = gameFns();
const dom = domStuff();

const playerBoard = new Gameboard(true);
const computerBoard = new Gameboard();

game.gameInit(playerBoard, computerBoard)


dom.renderBoard(playerBoard);
dom.renderBoard(computerBoard);



