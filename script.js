const btn = document.getElementById('create_btn')
const list = document.getElementById('todoList')
const form = document.getElementById('todoForm')

btn.addEventListener('click', () => {
    form.classList.toggle('hidden')
    btn.textContent = btn.textContent == '+' ? btn.textContent = 'x' : btn.textContent = '+'
})