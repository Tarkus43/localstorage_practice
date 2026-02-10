const findLastId = () => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    const todoKeys = Object.keys(todos)
    return +(todoKeys.sort().pop())
}

const addNewTodo = (todo) => {
    const todoList = JSON.parse(localStorage.getItem('todos'))
    console.log(todoList)
    todoList[`${findLastId() + 1}`] = todo
    console.log(todoList)
    localStorage.setItem('todos', JSON.stringify(todoList))
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