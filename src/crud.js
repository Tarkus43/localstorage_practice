// imports
import { findLastId } from "./helpers"

// adds new todo to localstorage
const addNewTodo = (todo) => {
    const todoList = JSON.parse(localStorage.getItem('todos'))
    console.log(todoList)
    todoList[`${findLastId() + 1}`] = { ...todo, completed: false }
    console.log(todoList)
    localStorage.setItem('todos', JSON.stringify(todoList))
}

// renders todos on page
const renderTodos = () => {
    const list = document.getElementById('todoList')

    list.innerHTML = ''

    const todoList = Object.entries(JSON.parse(localStorage.getItem('todos')))

    for (let i = 1; i < todoList.length; i++) {
        const id = todoList[i][0]
        const data = todoList[i][1]
        const completed = data.completed === true

        const todo = document.createElement('li')
        todo.className = 'todo_item' + (completed ? ' todo_item--completed' : '')
        todo.id = `todo-${id}`

        const done = document.createElement('input')
        done.type = 'checkbox'
        done.className = 'todo_done_checkbox'
        done.id = `chk${id}`
        done.dataset.id = id
        done.checked = completed
        done.setAttribute('aria-label', 'Mark todo as done')

        const title = document.createElement('h3')
        title.className = 'todo_item_title'
        title.textContent = data['title']

        const text = document.createElement('p')
        text.className = 'todo_item_description'
        text.textContent = data['text']

        const deleteTodo = document.createElement('button')
        deleteTodo.textContent = 'delete'
        deleteTodo.id = `btn${id}`
        deleteTodo.classList += 'delete_btn'

        const editTodo = document.createElement('button')
        editTodo.textContent = 'edit'
        editTodo.id = `edt${id}`
        editTodo.classList += 'edit_btn'

        todo.appendChild(done)
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
    todoList[id] = { ...todoList[id], ...updatedObj }
    try {
        localStorage.setItem('todos', JSON.stringify(todoList))
    } catch (error) {
        console.log(`error during saving to localstorage: ${error}`)
    }
}

// exports
export {renderTodos, addNewTodo, deleteTodo, updateTodo}