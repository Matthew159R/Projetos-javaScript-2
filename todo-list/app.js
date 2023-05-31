const form = document.querySelector('form')
const todos = document.querySelector('.todos')
const tasksComplet = document.querySelector('.closed-tasks')
const searchInput = document.querySelector('.search')
const closeTasksCompletButton = document.querySelector('.close')

let textTodo;
form.addEventListener('submit', event => {
    event.preventDefault()

    if (!todos.children) {
        alert('nenhuma tarefa')
    }
    // Adcionando uma task na tela
    const inputAddTodo = event.target.addTodo.value
    textTodo = inputAddTodo.trim()
    
    const todo = `
            <div class="todo">
                <p class="todo-text">${textTodo}</p>
                <img src="/imgs/circle.png" alt="" class="img-circle">
            </div>
     `
    if (textTodo.length > 300 || textTodo.length === 0) {
        alert('No máximo 300 caracteres e no mínimo 1')
        // Dar esse feedback no input
    }else {
        todos.innerHTML += todo
    }
})

todos.addEventListener('click', event => {
    const clickedElement = event.target

    if (clickedElement.tagName === 'IMG') {
        clickedElement.src = '/imgs/task-completed.png'
        clickedElement.parentElement.classList.add('todo-remove-animation')
        setTimeout(() => {
            clickedElement.parentElement.remove()
        }, 800)

        setTimeout(() => {
            tasksComplet.innerHTML += `
                <div class="closed-task">
                    <p>${textTodo}</p>
                    <img src="/imgs/task-completed.png" alt="" class="img-task-completed">
                </div>
            `

            taskClosed.push(tasksComplet)
        }, 1500)
    }
})

searchInput.addEventListener('input', event => {
    Array.from(todos.children).filter(todo => {
        const todoText = todo.querySelector('p')
        const searchInputToUperCase = searchInput.value.trim().toLocaleUpperCase()
        const todoTextToUpperCase = todoText.textContent.toLocaleUpperCase()
        const match = todoTextToUpperCase.includes(searchInputToUperCase)
        if (match) {
            todoText.parentElement.style.display = 'flex'
        }else if (!match) {
            todoText.parentElement.style.display = 'none'
        }
    })
})

let clicks = 1


closeTasksCompletButton.addEventListener('click', () => {
    clicks += 1

    if (clicks % 2 === 0) {
        tasksComplet.style.animation = 'closed-tasks-animation 1s forwards'
        closeTasksCompletButton.style.animation = 'close-img-animation 1s forwards'
    }else if (!clicks % 2 === 0) {
        closeTasksCompletButton.style.animation = 'close-img-animation-reverse 1s forwards'
        tasksComplet.style.animation = 'closed-task-animation-reverse 1s forwards'
    }
})