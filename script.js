const container = document.querySelector('.container')
const slider = document.querySelector('.slider')
const value = document.querySelector('.value')
let root = document.querySelector(':root')


// Creates grid function runs once at start and then when slider is changed
function createLayout(num) {
reset() // call to reset the grid before adding new elements
let i = 0
    while (i < (num*num) ){
        const squareDiv = document.createElement('div')
        squareDiv.className = 'square'
        squareDiv.addEventListener('mousedown', changeColor)
        squareDiv.addEventListener('mouseover', changeColor)
        container.append(squareDiv)
        i++
    }
    root.style.setProperty('--grid-layout', `repeat(${num}, 1fr)`)
}

slider.addEventListener('mouseup',() => createLayout(+slider.value))
slider.addEventListener('mousemove',() => updateValue(+slider.value))


function updateValue(show) {
    value.textContent = `${show} x ${show}`
}


//  Resets the grid elements
function reset() {
    container.innerHTML = ''
}

// Gets random number 0-255 for rgb
function getRgb () {
    return (Math.floor((Math.random()*256)))
}

let currentColor;

document.addEventListener('click',(e) => {
    id = e.target.id
    if (id === 'rgb') currentColor = `rgb`
    if (id === 'e') currentColor = 'white'
    if (id === 'clear') clear()
})

function clear () {
    createLayout(+slider.value)
}

let mouseDown = false
container.addEventListener('mousedown',() => mouseDown = true);
container.addEventListener('mouseup',() => mouseDown = false);


function changeColor (e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentColor === 'rgb') e.target.style.backgroundColor = `rgb(${getRgb()}, ${getRgb()}, ${getRgb()})`
    if (currentColor === 'white') e.target.style.backgroundColor = 'white'
    if (!currentColor) e.target.style.backgroundColor = 'black'
}




window.onload = () => {
    createLayout(+slider.value);
    updateValue(+slider.value)
}




