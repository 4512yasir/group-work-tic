document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell"); // create the tiles
    const statusText = document.getElementById("status");// show who is playing
    const resultText = document.getElementById("result"); // show result after the game end
    const resetButton = document.getElementById("reset"); // restart the game 

    let board = ["", "", "", "", "", "", "", "", ""];    // empty array of the number of tiles
    let currentPlayer = "X";  
    let gameActive = true;
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];