// Crud for indexedDB.html

// saving the name of player of the game
let tog = 1;
let whiteCastleChance = true;
let blackCastleChance = true;
document.getElementById('playerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;

    localStorage.setItem('player1', player1);
    localStorage.setItem('player2', player2);

    window.location.href = 'html/chess.html';
});
