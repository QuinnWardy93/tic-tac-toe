let Xplayer = "X"
let Oplayer = "O"
let WinningCombinations = [
    [
        0, 1, 2
    ],
    [
        3, 4, 5
    ],
    [
        6, 7, 8
    ],
    [
        0, 3, 6
    ],
    [
        1, 4, 7
    ],
    [
        2, 5, 8
    ],
    [
        0, 4, 8
    ],
    [
        2, 4, 6
    ]
]

let TurnCount = 0;
let win = false;


let cells = document.querySelectorAll('.row > div');
let circleTurn = false
let winningMessage = document.querySelector('h2')

for (let i = 0; i < cells.length; i++) {
    console.log(cells[i])
    cells[i].addEventListener('click', cellClicked, {once: true});

}


function cellClicked() {
    let currentPlayer = circleTurn ? Oplayer : Xplayer
    event.target.textContent = currentPlayer;
    TurnCount++


    checkWin()


    if (TurnCount === 9 && win === false) {
        winningMessage.innerHTML = "Draw";

    }

    swapPlayer();

    if (winningMessage.innerHTML === 'X wins!' || winningMessage.innerHTML === 'O wins!' || winningMessage.innerHTML === "Draw") {
        let button = document.getElementById('button')
         button.style.display = "block"
        button.addEventListener("click", resetGame)
    }

}



function resetGame() {
    location.reload()
}


function swapPlayer() {
    circleTurn = ! circleTurn
}

function checkWin() {
    if (cells[0].innerHTML === "X" & cells[1].innerHTML === "X" & cells[2].innerHTML === "X") {
        winningMessage.innerHTML = 'X wins!'
        win = true

    } else if (cells[3].innerHTML === "X" & cells[4].innerHTML === "X" & cells[5].innerHTML === "X") {
        winningMessage.innerHTML = 'X wins!'
        win = true
    } else if (cells[6].innerHTML === "X" & cells[7].innerHTML === "X" & cells[8].innerHTML === "X") {
        winningMessage.innerHTML = 'X wins!'
        win = true
    } else if (cells[0].innerHTML === "X" & cells[3].innerHTML === "X" & cells[6].innerHTML === "X") {
        winningMessage.innerHTML = 'X wins!'
        win = true
    } else if (cells[1].innerHTML === "X" & cells[4].innerHTML === "X" & cells[7].innerHTML === "X") {
        winningMessage.innerHTML = 'X wins!'
        win = true
    } else if (cells[2].innerHTML === "X" & cells[5].innerHTML === "X" & cells[8].innerHTML === "X") {
        winningMessage.innerHTML = 'X wins!'
        win = true
    } else if (cells[0].innerHTML === "X" & cells[4].innerHTML === "X" & cells[8].innerHTML === "X") {
        winningMessage.innerHTML = 'X wins!'
        win = true
    } else if (cells[2].innerHTML === "X" & cells[4].innerHTML === "X" & cells[6].innerHTML === "X") {
        winningMessage.innerHTML = 'X wins!'
        win = true
    } else if (cells[0].innerHTML === "O" & cells[1].innerHTML === "O" & cells[2].innerHTML === "O") {
        winningMessage.innerHTML = 'O wins!'
        win = true
    } else if (cells[3].innerHTML === "O" & cells[4].innerHTML === "O" & cells[5].innerHTML === "O") {
        winningMessage.innerHTML = 'O wins!'
        win = true
    } else if (cells[6].innerHTML === "O" & cells[7].innerHTML === "O" & cells[8].innerHTML === "O") {
        winningMessage.innerHTML = 'O wins!'
        win = true
    } else if (cells[0].innerHTML === "O" & cells[3].innerHTML === "O" & cells[6].innerHTML === "O") {
        winningMessage.innerHTML = 'O wins!'
        win = true
    } else if (cells[1].innerHTML === "O" & cells[4].innerHTML === "O" & cells[7].innerHTML === "O") {
        winningMessage.innerHTML = 'O wins!'
        win = true
    } else if (cells[2].innerHTML === "O" & cells[5].innerHTML === "O" & cells[8].innerHTML === "O") {
        winningMessage.innerHTML = 'O wins!'
        win = true
    } else if (cells[0].innerHTML === "O" & cells[4].innerHTML === "O" & cells[8].innerHTML === "O") {
        winningMessage.innerHTML = 'O wins!'
        win = true
    } else if (cells[2].innerHTML === "O" & cells[4].innerHTML === "O" & cells[6].innerHTML === "O") {
        winningMessage.innerHTML = 'O wins!'
        win = true
    }


}


// function checkWin(currentPlayer) {
//     return WinningCombinations.some(combination => {
//         return combination.every(WinCombination => {
//             return cells[WinCombination].classList.contains(currentPlayer)
//         })
//     })
// }
