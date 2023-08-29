import './style.css';

const Gameboard = require('./gameboard');
const gameFns = require('./game');

const game = gameFns();

const playerBoard = new Gameboard(true);
const computerBoard = new Gameboard();

game.gameInit(playerBoard, computerBoard)





