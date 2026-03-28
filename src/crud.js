// imports
import { findLastId } from "./helpers"

// adds new todo to localstorage
const addNewTodo = (todo) => {
    const todoList = JSON.parse(localStorage.getItem('todos'))
    console.log(todoList)
    todoList[`${findLastId() + 1}`] = todo
    console.log(todoList)
    localStorage.setItem('todos', JSON.stringify(todoList))
}

// renders todos on page
const renderTodos = () => {
    const list = document.getElementById('todoList')

    list.innerHTML = ''

    const todoList = Object.entries(JSON.parse(localStorage.getItem('todos')))

    for (let i = 1; i < todoList.length; i++) {
        const todo = document.createElement('li')
        todo.classList += 'todo_item'
        todo.id = `todo-${todoList[i][0]}`

        const title = document.createElement('h3')
        title.textContent = todoList[i][1]['title']

        const text = document.createElement('p')
        text.textContent = todoList[i][1]['text']

        const deleteTodo = document.createElement('button')
        deleteTodo.textContent = 'delete'
        deleteTodo.id = `btn${todoList[i][0]}`
        deleteTodo.classList += 'delete_btn'

        const editTodo = document.createElement('button')
        editTodo.textContent = 'edit'
        editTodo.id = `edt${todoList[i][0]}`
        editTodo.classList += 'edit_btn'

        todo.appendChild(title)
        todo.appendChild(text)
        todo.appendChild(editTodo)
        todo.appendChild(deleteTodo)

        list.appendChild(todo)
    }

}

const deleteTodo = (id) => {
    const todoList = JSON.parse(localStorage.getItem('todos'))
    console.log(`got todo object`)
    try {
        delete todoList[id]
        
    } catch (error) {
        console.log(`error during deleting: ${error}`)
    }

    try {
        localStorage.setItem('todos', JSON.stringify(todoList))
    } catch (error) {
        console.log(`error during saving to localstorage: ${error}`)
    } 
    renderTodos()
}

// helper to update todo by id
const updateTodo = (id, updatedObj) => {
    const todoList = JSON.parse(localStorage.getItem('todos')) || {}
    // keep existing id in stored object
    todoList[id] = updatedObj
    try {
        localStorage.setItem('todos', JSON.stringify(todoList))
    } catch (error) {
        console.log(`error during saving to localstorage: ${error}`)
    }
}

// exports
export {renderTodos, addNewTodo, deleteTodo, updateTodo}