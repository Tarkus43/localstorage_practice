if (!localStorage.length){
    localStorage.setItem('todos', JSON.stringify(
        {
            0:{

            }
        }
    ))
}

const findLastId = () => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    const todoKeys = Object.keys(todos)
    return todoKeys.sort().pop()
}

const btn = document.getElementById('create_btn')
const list = document.getElementById('todoList')
const formWrapper = document.getElementById('todoFormWrapper')
const form = document.querySelector('#todoForm')

btn.addEventListener('click', () => {
    formWrapper.classList.toggle('hidden')
    btn.textContent = btn.textContent == '+' ? btn.textContent = 'x' : btn.textContent = '+'
})

form.elements.submit.addEventListener('click',(event) => {
    event.preventDefault()
    const todoTitle = form.elements.titleForm.value
    const todoText = form.elements.descriptionForm.value

    const todoObject = {
        title: todoTitle,
        text: todoText
    }

    

    
})

