let colors = generateRandomColors(6)

const squares = document.querySelectorAll('.square')
const container = document.querySelector('#squareContainer')
const colorDisplay = document.querySelector('#colorDisplay')
const message = document.querySelector('#message')
const easyButton = document.querySelector('#easy-button')
const hardButton = document.querySelector('#hard-button')
const newGameButton = document.querySelector('#newGame-button')

let mode = 'hard'
let pickedColor = pickColor()

colorDisplay.textContent =  pickedColor.toUpperCase()

easyButton.addEventListener('click', () => {
    mode = 'easy'
    hardButton.classList.remove('active')

    easyButton.classList.add('active')

    gameMode(3)
})

hardButton.addEventListener('click', () => {
    mode = 'hard'
    hardButton.classList.add('active')

    easyButton.classList.remove('active')
    
    gameMode(6)
})

newGameButton.addEventListener('click' , () => {
    newGame()
})


for (let i = 0; i < squares.length; i++) {
    const square = squares[i]

    square.style.background = colors[i]

    square.addEventListener('click', () => {
        const color = square.style.background
        if (color === pickedColor) {
            message.textContent = 'Correct!'

            changeColor(pickedColor)

            setTimeout(newGame, 3000)
            
            
        }else {
            square.style.background = '#232323'
            message.textContent = 'Try again!'
            
        }
    })
}

function changeColor(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = color
    }
}

function pickColor() {
    const randomNumber = Math.floor(Math.random() * colors.length)

    return colors[randomNumber]
}

function generateRandomColors(num)  {
    let arr = []

    for (let i = 0; i < num; i++) {
        const color = randomColor()
        arr.push(color)
    }
    return arr
}

function randomColor() {
   var r =  Math.floor(Math.random() * 256)
   var g =  Math.floor(Math.random() * 256)
   var b =  Math.floor(Math.random() * 256)


   return `rgb(${r}, ${g}, ${b})`
}


function gameMode(num) {
    colors = generateRandomColors(num)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    message.textContent = ''
    
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i]
            squares[i].style.display = 'block'
        }else {
            squares[i].style.display = 'none'
        }
    }
}


function newGame() {
    if (mode === 'easy') {
        gameMode(3)
    }else {
        gameMode(6)
    }
}