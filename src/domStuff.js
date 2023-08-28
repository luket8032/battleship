const domStuff = () => {
    const main = document.getElementById('main');
    const boardsWrapper = document.getElementById('boardsWrapper')

    const renderBoard = (board) => {
        const boardContainer = document.createElement('div');
        boardContainer.className = 'board-container';
        board.locations.forEach(cell => {
            const newCell = document.createElement('div');
            newCell.className = 'cell';
            newCell.setAttribute('data-location', cell.id);
            boardContainer.append(newCell);
        });
        boardsWrapper.append(boardContainer);
    }

    return { renderBoard }
}

module.exports = domStuff;