// imports
import { findLastId, checkIfTodoEmpty, getTodoById } from "./helpers.js"
import { addNewTodo, renderTodos, deleteTodo, updateTodo } from "./crud.js"
import './styles/sass/index.scss'


checkIfTodoEmpty() // checks if local storage empty, if not then fills with main object
renderTodos() // renders existing todos

// getting html elements
const btn = document.getElementById('create_btn')
const list = document.getElementById('todoList')
const formWrapper = document.getElementById('todoFormWrapper')
const form = document.querySelector('#todoForm')

// functionality of button that adds form on page
btn.addEventListener('click', () => {
    formWrapper.classList.toggle('hidden')
    btn.textContent = btn.textContent == '+' ? btn.textContent = 'x' : btn.textContent = '+'
})

list.addEventListener('change', e => {
    if (e.target.classList.contains('todo_done_checkbox')) {
        const id = e.target.dataset.id
        updateTodo(id, { checked: Boolean(e.target.checked) })
        renderTodos()
    }
})

// catching button clicks on todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete_btn')){
        const id = e.target.id.slice(3)
        deleteTodo(id)
        return
    }

    if (e.target.classList.contains('edit_btn')){
        const id = e.target.id.slice(3)
        const todoEl = document.getElementById(`todo-${id}`)
        if (!todoEl) return

        const todo = getTodoById(id)
        if (!todo) return

        // keep original content in case user cancels
        const originalContent = todoEl.innerHTML

        // clear element and build inline edit form (project style: create elements)
        todoEl.innerHTML = ''

        const titleInputWrapper = document.createElement('div')
        titleInputWrapper.className = 'todo_input_wrapper'
        const titleInput = document.createElement('input')
        titleInput.type = 'text'
        titleInput.className = 'todo_input todo_form_title'
        titleInput.value = todo.title || ''
        titleInput.id = `editTitle-${id}`
        titleInputWrapper.appendChild(titleInput)

        const textInputWrapper = document.createElement('div')
        textInputWrapper.className = 'todo_input_wrapper'
        const textInput = document.createElement('input')
        textInput.type = 'text'
        textInput.className = 'todo_input todo_form_description'
        textInput.value = todo.text || ''
        textInput.id = `editText-${id}`
        textInputWrapper.appendChild(textInput)

        const actionsWrapper = document.createElement('div')
        actionsWrapper.className = 'todo_item_actions'

        const confirmBtn = document.createElement('button')
        confirmBtn.textContent = 'confirm'
        // use existing edit button styles for confirm (green)
        confirmBtn.className = 'edit_btn confirm_update_btn'
        confirmBtn.id = `conf${id}`

        const cancelBtn = document.createElement('button')
        cancelBtn.textContent = 'cancel'
        // use existing delete button styles for cancel (red)
        cancelBtn.className = 'delete_btn cancel_update_btn'
        cancelBtn.id = `canc${id}`

        actionsWrapper.appendChild(confirmBtn)
        actionsWrapper.appendChild(cancelBtn)

        todoEl.appendChild(titleInputWrapper)
        todoEl.appendChild(textInputWrapper)
        todoEl.appendChild(actionsWrapper)

        // handlers for confirm and cancel
        confirmBtn.addEventListener('click', (ev) => {
            ev.preventDefault()
            const newTitle = titleInput.value.trim()
            const newText = textInput.value.trim()

            const updatedObj = {
                title: newTitle,
                text: newText
            }

            updateTodo(id, updatedObj)
            renderTodos()
        })

        cancelBtn.addEventListener('click', (ev) => {
            ev.preventDefault()
            todoEl.innerHTML = originalContent
        })

        return
    }
})

//form validation and processing data to create new todo
form.elements.submit.addEventListener('click',(event) => {
    event.preventDefault()
    const todoTitle = form.elements.titleForm.value
    const todoText = form.elements.descriptionForm.value

    const todoObject = {
        title: todoTitle,
        text: todoText
    }

    form.elements.titleForm.value = ''
    form.elements.descriptionForm.value = ''

    addNewTodo(todoObject)
    renderTodos()
})

