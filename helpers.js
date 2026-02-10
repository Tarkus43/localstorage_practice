const findLastId = () => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    const todoKeys = Object.keys(todos)
    return todoKeys.sort().pop()
}

const addNewTodo = () => {
    
}

const checkIfTodoEmpty = () => {
    if (!localStorage.length){
    localStorage.setItem('todos', JSON.stringify(
        {
            0:{

            }
        }
    ))
}
}

export {findLastId, addNewTodo, checkIfTodoEmpty}