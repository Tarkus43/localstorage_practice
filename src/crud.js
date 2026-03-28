// imports
import { findLastId } from "./helpers"

// adds new todo to localstorage
const addNewTodo = (todo) => {
    const todoList = JSON.parse(localStorage.getItem('todos'))
    console.log(todoList)
    todoList[`${findLastId() + 1}`] = { ...todo, checked: false }
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
        const isChecked =
            data.checked === true ||
            (data.checked === undefined && data.completed === true)

        const todo = document.createElement('li')
        todo.className = 'todo_item' + (isChecked ? ' todo_item--checked' : '')
        todo.id = `todo-${id}`

        const done = document.createElement('input')
        done.type = 'checkbox'
        done.className = 'todo_done_checkbox'
        done.id = `chk${id}`
        done.dataset.id = id
        done.checked = isChecked
        done.setAttribute('aria-label', 'Mark todo as done')

        const title = document.createElement('h3')
        title.className = 'todo_item_title'
        title.textContent = data['title']

        const text = document.createElement('p')
        text.className = 'todo_item_description'
        text.textContent = data['text']

        const body = document.createElement('div')
        body.className = 'todo_item_body'
        body.appendChild(title)
        body.appendChild(text)

        const deleteTodo = document.createElement('button')
        deleteTodo.textContent = 'delete'
        deleteTodo.id = `btn${id}`
        deleteTodo.classList.add('delete_btn')

        const editTodo = document.createElement('button')
        editTodo.textContent = 'edit'
        editTodo.id = `edt${id}`
        editTodo.classList.add('edit_btn')

        const actionsRow = document.createElement('div')
        actionsRow.className = 'todo_item_actions'
        actionsRow.appendChild(editTodo)
        actionsRow.appendChild(deleteTodo)

        todo.appendChild(body)
        todo.appendChild(done)
        todo.appendChild(actionsRow)

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