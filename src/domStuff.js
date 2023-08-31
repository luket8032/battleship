const domStuff = () => {
    const boardsWrapper = document.getElementById('boardsWrapper')

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
        board.locations.forEach((cell, index) => {
            const newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.setAttribute('data-location', cell.id);
            newCell.textContent = index;
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

    return { renderBoard, updateBoard, renderEnd }
}

module.exports = domStuff;