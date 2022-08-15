const container = document.querySelector('.container')
let root = document.querySelector(':root')
let layout = 16



function createLayout(num) {
let i = 0
    while (i < (num*num) ){
        const squareDiv = document.createElement('div')
        squareDiv.className = 'square'
        container.append(squareDiv)
        i++
    }
    root.style.setProperty('--grid-layout', `repeat(${num}, 1fr)`)
}
createLayout(layout)



const box = document.querySelectorAll('.square')
box.forEach(e => {
    e.addEventListener('mouseover',() => e.classList.add('hover'));
})


