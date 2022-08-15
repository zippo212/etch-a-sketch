const container = document.querySelector('.container')
let root = document.querySelector(':root')
let btn = document.querySelector('button')
let bgColor = 'red'


function createLayout() {
let num = +prompt('Enter number max 100')
if (!(Number.isInteger(num) && num <= 100)) return
reset()
let i = 0
    while (i < (num*num) ){
        const squareDiv = document.createElement('div')
        squareDiv.className = 'square'
        container.append(squareDiv)
        i++
    }
    root.style.setProperty('--grid-layout', `repeat(${num}, 1fr)`)
    eventL()
}
btn.addEventListener('click', createLayout)

function reset() {
    container.innerHTML = ''
}

function changeColor (color) {
    root.style.setProperty('--box-bg-color', color)
}
changeColor(bgColor)

function eventL() {
const box = document.querySelectorAll('.square')
box.forEach(e => {
    e.addEventListener('mouseover',() => e.classList.add('hover'));
})    
}



