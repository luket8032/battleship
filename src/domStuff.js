const domStuff = () => {
    const boardsWrapper = document.getElementById('boardsWrapper')

    const renderBoard = (board) => {
        const boardContainer = document.createElement('div');
        boardContainer.className = 'board-container';
        board.locations.forEach(cell => {
            const newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.setAttribute('data-location', cell.id);
            if(cell.shipName) {
                if(board.isPlayer) newCell.classList.add('has-ship');
                newCell.setAttribute('data-ship', cell.shipName);
            }
            boardContainer.append(newCell);
        });
        boardsWrapper.append(boardContainer);
    }

    return { renderBoard }
}

module.exports = domStuff;