import { findLastId, checkIfTodoEmpty,} from "./helpers.js"
import { addNewTodo, renderTodos } from "./crud.js"
import './styles/sass/index.scss'

checkIfTodoEmpty()
renderTodos()

const btn = document.getElementById('create_btn')
const list = document.getElementById('todoList')
const formWrapper = document.getElementById('todoFormWrapper')
const form = document.querySelector('#todoForm')

btn.addEventListener('click', () => {
    formWrapper.classList.toggle('hidden')
    btn.textContent = btn.textContent == '+' ? btn.textContent = 'x' : btn.textContent = '+'
})

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete_btn')){
        const id = e.target.id.slice(3)
        console.log(id)
    }
})

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

