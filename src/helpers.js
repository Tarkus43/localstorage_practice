// finds last id
const findLastId = () => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    const todoKeys = Object.keys(todos)
    return +(todoKeys.sort().pop())
}

// checks if todo object exists
const checkIfTodoEmpty = () => {
    if (localStorage.getItem('todos') == null){
        localStorage.setItem('todos', JSON.stringify(
            {
                0: 'YOU SHOULD NOT SEE THIS'
            }
        ))
    }
}

// helper to get todo by id
const getTodoById = (id) => {
    const todos = JSON.parse(localStorage.getItem('todos')) || {}
    return todos[id]
}

// exports
export {findLastId, checkIfTodoEmpty, getTodoById}