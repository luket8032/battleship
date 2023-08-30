import './style.css';

const Gameboard = require('./gameboard');
const gameFns = require('./game');

const game = gameFns();
const startBtn = document.getElementById('startButton');
const startScreen = document.getElementById('startScreen');
const boardsWrapper = document.getElementById('boardsWrapper');

game.startGame();

startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    boardsWrapper.style.display = 'flex';
});








