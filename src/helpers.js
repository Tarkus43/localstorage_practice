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
    if (localStorage.getItem('todos') == null){
    localStorage.setItem('todos', JSON.stringify(
        {
            0: 'YOU SHOULD NOT SEE THIS'
        }
    ))
}
}

const renderTodos = () => {
    const list = document.getElementById('todoList')

    list.innerHTML = ''

    const todoList = Object.entries(JSON.parse(localStorage.getItem('todos')))

    for (let i = 1; i < todoList.length; i++) {
        const li = document.createElement('li')

        const title = document.createElement('h3')
        title.textContent = todoList[i][1]['title']

        const text = document.createElement('p')
        text.textContent = todoList[i][1]['text']

        li.appendChild(title)
        li.appendChild(text)


        list.appendChild(li)
    }

}

export {findLastId, addNewTodo, checkIfTodoEmpty, renderTodos}