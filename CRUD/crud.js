







// Save game state to local storage
function saveGameState(gameName) {
    const gameState = {
        board: Array.from(document.querySelectorAll('.box')).map(box => ({
            id: box.id,
            innerText: box.innerText,
            backgroundColor: box.style.backgroundColor
        })),
        tog,
        whiteCastleChance,
        blackCastleChance
    };
    localStorage.setItem(`chessGameState_${gameName}`, JSON.stringify(gameState));
    alert(`Game "${gameName}" saved successfully!`);
}

// Load game state from local storage
function loadGameState(gameName) {
    const savedGameState = localStorage.getItem(`chessGameState_${gameName}`);
    if (savedGameState) {
        const gameState = JSON.parse(savedGameState);
        gameState.board.forEach(boxState => {
            const box = document.getElementById(boxState.id);
            box.innerText = boxState.innerText;
            box.style.backgroundColor = boxState.backgroundColor;
        });
        tog = gameState.tog;
        whiteCastleChance = gameState.whiteCastleChance;
        blackCastleChance = gameState.blackCastleChance;
        insertImage();
        coloring();
        alert(`Game "${gameName}" loaded successfully!`);
    } else {
        alert(`No saved game found with the name "${gameName}".`);
    }
}

// Delete the previously saved game state from local storage
function deleteGameState() {
    const keysToDelete = [];
    const prefix = 'chessGameState_';
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(prefix)) {
            keysToDelete.push(key);
        }
    }

    if (keysToDelete.length > 0) {
        keysToDelete.forEach(key => localStorage.removeItem(key));
        alert('All saved games deleted successfully!');
    } else {
        alert('No saved games found to delete.');
    }
}

// Reset the game state to start a new game
function newGame() {
    // Clear the board
    location.reload();
}

document.getElementById('deleteGameButton').addEventListener('click', deleteGameState);
document.getElementById('newGameButton').addEventListener('click', newGame);

document.getElementById('saveGameButton').addEventListener('click', () => {
    const gameName = document.getElementById('saveGameName').value;
    if (gameName) {
        saveGameState(gameName);
    } else {
        alert('Please enter a game name to save.');
    }
});

document.getElementById('loadGameButton').addEventListener('click', () => {
    const gameName = document.getElementById('loadGameName').value;
    if (gameName) {
        loadGameState(gameName);
    } else {
        alert('Please enter a game name to load.');
    }
});
