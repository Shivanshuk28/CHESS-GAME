// Crud for indexedDB.html

// saving the name of player of the game
let tog = 1;
let whiteCastleChance = true;
let blackCastleChance = true;
document.getElementById('playerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    const gameTime = document.getElementById('gameTime').value;

    localStorage.setItem('player1', player1);
    localStorage.setItem('player2', player2);
    localStorage.setItem('gameTime', gameTime);

    window.location.href = 'HTML/chess.html';
});
