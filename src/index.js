import './style.css';

const Gameboard = require('./gameboard');
const gameFns = require('./game');
const domStuff = require('./domStuff');

const game = gameFns();
const dom = domStuff();
const startBtn = document.getElementById('startButton');
const againBtn = document.getElementById('playAgain');
const menuBtn = document.getElementById('mainMenu');

game.startGame();

startBtn.addEventListener('click', () => {
    dom.hideStart();
    dom.showGame();
});

againBtn.addEventListener('click', () => {
    // reset and play again
    game.resetGame();
    dom.hideEnd();
});

menuBtn.addEventListener('click', () => {
    // reset and go to menu
    game.resetGame();
    dom.showStart();
    dom.hideGame();
    dom.hideEnd();
});










