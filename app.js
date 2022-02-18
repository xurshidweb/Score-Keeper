const scorepl1 = document.querySelector('.scorepl1')
const scorepl2 = document.querySelector('.scorepl2')
const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const refresh = document.getElementById('refresh')
const selectEl = document.querySelector('.select')


let resultpl1 = 0
let resultpl2 = 0
let gameLevel = 3
let gameOver = true


selectEl.addEventListener('change',function(e) {
    scorepl1.textContent = 0
    scorepl2.textContent = 0
    scorepl1.style.color = '#2A3374'
    scorepl2.style.color = '#2A3374'
    resultpl1 = 0
    resultpl2 = 0
    gameOver = true
})






player1.addEventListener('click', function() {
    if(gameOver) {
        resultpl1++
        scorepl1.textContent = resultpl1
        // scorepl1.style.color = 'black'
    if(resultpl1 >= selectEl.value) {
        gameOver = false
        scorepl1.style.color = 'green'
        scorepl2.style.color = 'red'
    }
    }
})


player2.addEventListener('click', function() {
    if(gameOver) {
        resultpl2++
        scorepl2.textContent = resultpl2
    if(resultpl2 >= selectEl.value) {
        gameOver = false
        scorepl2.style.color = 'green'
        scorepl1.style.color = 'red'

    }
}
})

refresh.addEventListener('click',function(e) {
    scorepl1.textContent = 0
    scorepl2.textContent = 0
    resultpl1 = 0
    resultpl2 = 0
    gameOver = true
    scorepl1.style.color = 'black'
    scorepl2.style.color = 'black'
})

// const select = document.getElementById('select')
// const scorePlayer1 = document.getElementById('score-player1')
// const scorePlayer2 = document.getElementById('score-player1')
// const Player1 = document.getElementById('player1')
// const Player2 = document.getElementById('player22')
// const reset = document.querySelector('.reset')



// let resultpl1 = 0
// let resultpl2 = 0
// let gameLevel = 3
// let gameOver = false

// Player1.addEventListener('click', function() {
//     resultpl1++
//     scorePlayer1.textContent = resultpl1
// })


// Player2.addEventListener('click', function() {
//     resultpl2++
//     scorePlayer2.textContent = resultpl2
// })