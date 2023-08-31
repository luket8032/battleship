import './style.css';

const Gameboard = require('./gameboard');
const gameFns = require('./game');

const game = gameFns();
const startBtn = document.getElementById('startButton');
const againBtn = document.getElementById('playAgain');
const menuBtn = document.getElementById('mainMenu');
const startScreen = document.getElementById('startScreen');
const boardsWrapper = document.getElementById('boardsWrapper');
const endWrapper = document.getElementById('endWrapper');
const instructions = document.getElementById('instructions');

game.startGame();

startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    boardsWrapper.style.display = 'flex';
    instructions.style.display = 'block';
});

againBtn.addEventListener('click', () => {
    // reset and play again
    game.resetGame();
    endWrapper.style.display = 'none';
});

menuBtn.addEventListener('click', () => {
    // reset and go to menu
    game.resetGame();
    startScreen.style.display = 'flex';
    boardsWrapper.style.display = 'none';
    endWrapper.style.display = 'none';
});










