const domStuff = () => {
    const boardsWrapper = document.getElementById('boardsWrapper');
    const startScreen = document.getElementById('startScreen');
    const endWrapper = document.getElementById('endWrapper');
    const instructions = document.getElementById('instructions');
    const title = document.getElementById('title');
    const rotateBtn = document.getElementById('rotateBtn');
    const randomBtn = document.getElementById('randomBtn');

    const renderBoard = (board) => {
        const boardContainer = document.createElement('div');
        const boardGrid = document.createElement('div');
        const boardTitle = document.createElement('h1');
        boardGrid.className = 'board-container';
        boardTitle.className = 'board-title';
        if(board.isPlayer) {
            boardGrid.setAttribute('data-owner', 'player');
            boardTitle.textContent = 'Your Board';
        } else {
            boardGrid.setAttribute('data-owner', 'computer');
            boardTitle.textContent = 'Enemy Board';
        }
        board.locations.forEach((cell) => {
            const newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.setAttribute('data-location', cell.id);
            if(cell.shipName) {
                if(board.isPlayer) newCell.classList.add('has-ship');
                newCell.setAttribute('data-ship', cell.shipName);
            }

            if(cell.isHit) {
                newCell.className = 'hit';
            }

            if(cell.isHit && !cell.shipName) {
                newCell.className = 'miss';
            }
            boardGrid.append(newCell);
        });
        boardContainer.append(boardTitle, boardGrid);
        boardsWrapper.append(boardContainer);
    }
    
    const updateBoard = (playerBoard, computerBoard) => {
        boardsWrapper.innerHTML = '';
        renderBoard(playerBoard);
        renderBoard(computerBoard);
    }

    const renderEnd = () => {
        const end = document.getElementById('endWrapper');
        end.style.display = 'block';
    }

    const hideStart = () => {
        startScreen.style.display = 'none';
        title.style.display = 'none';
    }

    const showGame = () => {
        boardsWrapper.style.display = 'flex';
        instructions.style.display = 'block';
        instructions.textContent = 'Click a spot on your board to place your ships.';
        rotateBtn.style.display = 'block';
        randomBtn.style.display = 'block';
    }

    const hideEnd = () => {
        endWrapper.style.display = 'none';
    }

    const showEnd = () => {
        endWrapper.style.display = 'block';
    }

    const showStart = () => {
        startScreen.style.display = 'flex';
        title.style.display = 'block';
    }

    const hideGame = () => {
        boardsWrapper.style.display = 'none';
        instructions.style.display = 'none';
        rotateBtn.style.display = 'none';
        randomBtn.style.display = 'none';
    }

    const changeInstructions = (newInstructions) => {
        instructions.textContent = newInstructions;
    }

    const hideRotate = () => {
        rotateBtn.style.display = 'none';
        randomBtn.style.display = 'none';
    }

    return { 
        renderBoard, 
        updateBoard, 
        renderEnd, 
        hideStart, 
        showGame, 
        hideEnd, 
        showStart, 
        hideGame, 
        showEnd,
        changeInstructions,
        hideRotate
    }
}

module.exports = domStuff;