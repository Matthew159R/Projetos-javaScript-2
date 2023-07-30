const ticTacToe = () => {
    
    const tableGame = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    
    let player = 'x'
    let victory = false
    let old = false

    const checkVictory = () => {
        if (tableGame[0][0] === player && tableGame[0][1] === player && tableGame[0][2] === player) {
            victory =  true
        }else if (tableGame[1][0] === player && tableGame[1][1] === player && tableGame[1][2] === player) {
            victory = true
        }else if (tableGame[2][0] === player && tableGame[2][1] === player && tableGame[2][2] === player) {
            victory = true
        }

        if (tableGame[0][0] === player && tableGame[1][0] === player && tableGame[2][0] === player) {
            victory = true
        }else if (tableGame[0][1] === player && tableGame[1][1] === player && tableGame[2][1] === player) {
            victory = true
        }else if (tableGame[0][2] === player && tableGame[1][2] === player && tableGame[2][2] === player) {
            victory = true
        }

        if (tableGame[0][0] === player && tableGame[1][1] === player && tableGame[2][2] === player) {
            victory = true
        }else if (tableGame[0][2] === player && tableGame[1][1] === player && tableGame[2][0] === player) {
            victory = true
        }
    }

    const board = document.querySelector('table')

    const finalMessage = () => {
        if (victory) {
            const finalMessageBox = document.querySelector('.finalMessage')
            finalMessageBox.style.display = 'flex'
            finalMessageBox.querySelector('h1').textContent = player
            board.style.display = 'none'
        }
    }

    board.addEventListener('click', event => {
        const clickedElement = event.target

        if(clickedElement.tagName === 'TD') {
            const cellLine = clickedElement.getAttribute('data-line')
            const cellPosition = clickedElement.getAttribute('data-cell')

            if (tableGame[cellLine][cellPosition] === '' && clickedElement.textContent === '') {
                tableGame[cellLine][cellPosition] = player
                clickedElement.textContent = player
                if (player === 'x') {
                    clickedElement.classList.add('checkedX')
                }else if (player === 'o') {
                    clickedElement.classList.add('checkedO')
                }
                checkVictory()
                finalMessage()

                console.log(tableGame)
                player === 'x' ? player =  'o' : player = 'x'
            }
        }
    })
}

ticTacToe()
