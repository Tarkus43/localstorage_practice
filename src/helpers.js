const findLastId = () => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    const todoKeys = Object.keys(todos)
    return +(todoKeys.sort().pop())
}

const checkIfTodoEmpty = () => {
    if (localStorage.getItem('todos') == null){
        localStorage.setItem('todos', JSON.stringify(
            {
                0: 'YOU SHOULD NOT SEE THIS'
            }
        ))
    }
}


export {findLastId, checkIfTodoEmpty}