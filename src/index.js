document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell"); // create the tiles
    const statusText = document.getElementById("status");// show who is playing
    const resultText = document.getElementById("result"); // show result after the game end
    const resetButton = document.getElementById("reset"); // restart the game 

    let board = ["", "", "", "", "", "", "", "", ""];    // empty array of the number of tiles
    let currentPlayer = "X";  
    let gameActive = true;