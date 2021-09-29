const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')

let tasksNumber = 0

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
    createDeleteElements(input.value)
    input.value = ''
    }
});

btn.addEventListener('click', (e) => {
    if(input.value === '') return
    createDeleteElements(input.value)
    input.value = ''
})
// create tasks
function createDeleteElements(value) {
    tasksNumber++
    
    const li = document.createElement('li')
    const btn = document.createElement('button')

    li.className = 'li'
    li.textContent = value 
    
    btn.className = 'btn'
    btn.textContent = 'Remove'
    li.appendChild(btn)

    // remove tasks
    btn.addEventListener('click', (e) => {
        tasksNumber--
        total.textContent = tasksNumber
        result.removeChild(li)
        
    })

    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active')
    })

    total.textContent = tasksNumber

    result.appendChild(li)
}