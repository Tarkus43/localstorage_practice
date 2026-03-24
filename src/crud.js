const addNewTodo = (todo) => {
    const todoList = JSON.parse(localStorage.getItem('todos'))
    console.log(todoList)
    todoList[`${findLastId() + 1}`] = todo
    console.log(todoList)
    localStorage.setItem('todos', JSON.stringify(todoList))
}