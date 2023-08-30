const domStuff = () => {
    const boardsWrapper = document.getElementById('boardsWrapper')

    const renderBoard = (board) => {
        const boardContainer = document.createElement('div');
        boardContainer.className = 'board-container';
        if(board.isPlayer) {
            boardContainer.setAttribute('data-owner', 'player')
        } else {
            boardContainer.setAttribute('data-owner', 'computer');
        }
        board.locations.forEach(cell => {
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
            boardContainer.append(newCell);
        });
        boardsWrapper.append(boardContainer);
    }

    const updateBoard = (playerBoard, computerBoard) => {
        boardsWrapper.innerHTML = '';
        renderBoard(playerBoard);
        renderBoard(computerBoard);
    }

    return { renderBoard, updateBoard }
}

module.exports = domStuff;