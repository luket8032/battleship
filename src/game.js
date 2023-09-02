const domStuff = require('./domStuff');
const Player = require('./player')
const Gameboard = require('./gameboard');
const dom = domStuff();

const game = () => {
    const player = new Player('human');

    const playerBoard = new Gameboard(true);
    const computerBoard = new Gameboard();
    
    let currentShip = 0;

    playerBoard.init();
    computerBoard.init();

    playerBoard.placeRandom();

    computerBoard.placeShip(computerBoard.ships[0], 3);
    computerBoard.placeShip(computerBoard.ships[1], 23);
    computerBoard.placeShip(computerBoard.ships[2], 53);
    computerBoard.placeShip(computerBoard.ships[3], 73);
    computerBoard.placeShip(computerBoard.ships[4], 93);

    function doTurn(e) { 
        const target = e.target;
        let targetLocation;
        
        if(target.classList.contains('cell')) {
            targetLocation = target.dataset.location
        }

        if(!computerBoard.locations[targetLocation].isHit) {
            // do something
            player.attack(computerBoard, targetLocation);
            player.autoAttack(playerBoard)
            dom.updateBoard(playerBoard, computerBoard)
        }

        if(playerBoard.checkAllSunk() || computerBoard.checkAllSunk()) {
            dom.renderEnd();
        } else {
            addBoardListener();
        }
    }

    function startPlacement() {
        const board = document.querySelector(`.board-container[data-owner="player"]`);
        const cells = board.querySelectorAll('.cell');
        const rotateBtn = document.getElementById('rotateBtn');
        const shipDirection = playerBoard.ships[currentShip].direction;

        rotateBtn.addEventListener('click', () => {
            if(shipDirection === 'x') {
                playerBoard.ships[currentShip].direction = 'y'
            } else {
                playerBoard.ships[currentShip].direction = 'x'
            }
            startPlacement();
        })

        cells.forEach(cell => {
            cell.addEventListener('mouseover', showPreview);
            cell.addEventListener('mouseleave', () => {
                cells.forEach(cell => {
                    if(cell.className !== "cell has-ship") {
                        cell.className = 'cell';
                    }
                });
            });
        })
        board.addEventListener('click', doPlace)
    }

    function doPlace(e) {
        const target = e.target;
        const remaining = playerBoard.ships[currentShip].shipLength;
        const shipDirection = playerBoard.ships[currentShip].direction;
        const currentLocation = parseInt(target.dataset.location);
        let canPlace = true;
        // check if overlap with already placed ship
        for(let i = 0; i < remaining; i++) {
            if(shipDirection === 'x') {
                const lastLocation = currentLocation + playerBoard.ships[currentShip].shipLength;
                const nextLocation = currentLocation + i + 1;
                if(nextLocation % 10 === 0 && nextLocation !== lastLocation) {
                    canPlace = false;
                    break;
                }

                if(playerBoard.locations[currentLocation + i].shipName) {
                    canPlace = false;
                    break;
                }
            } else {
                // check for direction 'y'
                const lastLocation = currentLocation + (playerBoard.ships[currentShip].shipLength * 10);
                const nextLocation = currentLocation + ((i + 1) * 10);
                if(nextLocation >= 100 && nextLocation !== lastLocation) {
                    canPlace = false;
                    break;
                }

                if(playerBoard.locations[currentLocation + (i * 10)].shipName) {
                    canPlace = false;
                    break;
                }    
            }
        }

        // check if placement is valid, if so place ship, else do nothing
        if(canPlace) {
            console.log(currentShip)
            playerBoard.placeShip(playerBoard.ships[currentShip], currentLocation);
            console.log('ship placed!')
            currentShip++;
            dom.updateBoard(playerBoard, computerBoard);
            if(currentShip !== 5) {
                startPlacement();
            } else {
                addBoardListener();
                dom.changeInstructions('Click a spot on the board to take a shot at the enemy.');
                dom.hideRotate();
            }
        }

    }

    function showPreview(e) {
        const remaining = playerBoard.ships[currentShip].shipLength;
        const target = e.target;
        const shipDirection = playerBoard.ships[currentShip].direction;
        const currentLocation = parseInt(target.dataset.location);

        if (target.classList.contains('has-ship')) {
            return;
        }

        if (shipDirection === 'x') {
            if(currentLocation % 10 === 9) {
                target.className = 'preview';
            } else {
                target.className = 'preview';
                for(let i = 0; i < remaining; i++) {
                    const nextLocation = currentLocation + i;
                    const nextCell = document.querySelector(`[data-location="${nextLocation}"]`)
                    if (!nextCell.classList.contains('has-ship')) {
                        nextCell.className = 'preview';
                    }
                    if (nextLocation % 10 === 9 ) {
                        break;
                    }
                }
            }
        } else {
            for(let i = 0; i < remaining; i++) {
                const nextLocation = currentLocation + i * 10;
                if (nextLocation >= 100) {
                    break;
                }
                const nextCell = document.querySelector(`[data-location="${nextLocation}"]`);
                if (!nextCell.classList.contains('has-ship')) {
                    nextCell.className = 'preview';
                }
            }
        }
    }

    function addBoardListener() {
        const board = document.querySelector(`.board-container[data-owner="computer"]`);
        board.addEventListener('click', doTurn);
    }

    function startGame() {
        renderBoards();
        addBoardListener(); // temp
    }

    function renderBoards() {
        dom.renderBoard(playerBoard);
        dom.renderBoard(computerBoard);
    }

    function endGame(board1, board2) {
        if(board1.checkAllSunk) return 'You won! So epic mode...';
        if(board2.checkAllSunk) return 'You lost. You stink...'
    }

    function resetGame() {
        const boardsWrapper = document.getElementById('boardsWrapper');
        playerBoard.ships = [];
        computerBoard.ships = []
        playerBoard.locations = [];
        computerBoard.locations = [];
        currentShip = 0;
        playerBoard.init();
        computerBoard.init();

        computerBoard.placeShip(computerBoard.ships[0], 3);
        computerBoard.placeShip(computerBoard.ships[1], 23);
        computerBoard.placeShip(computerBoard.ships[2], 53);
        computerBoard.placeShip(computerBoard.ships[3], 73);
        computerBoard.placeShip(computerBoard.ships[4], 93);

        boardsWrapper.innerHTML = '';
        startGame();
    }

    return { startGame, endGame, resetGame, startPlacement }
}

module.exports = game;