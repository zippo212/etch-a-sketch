const container = document.querySelector('.container')
const slider = document.querySelector('.slider')
const value = document.querySelector('.value')
const btns = document.querySelectorAll('button')
let root = document.querySelector(':root')


// Creates grid function runs once at start and then when slider is changed
function createLayout(num) {
reset() // call to reset the grid before adding new elements
let i = 0
    while (i < (num*num) ){
        const squareDiv = document.createElement('div')
        squareDiv.className = 'square'
        squareDiv.addEventListener('mousedown', changeColor) // listen to mousedown and mouseover  events on the square
        squareDiv.addEventListener('mouseover', changeColor) // and call changeColor each time
        container.append(squareDiv)
        i++
    }
    root.style.setProperty('--grid-layout', `repeat(${num}, 1fr)`)
}

// listen to change in slider and run function accordingly 
slider.addEventListener('mouseup',() => createLayout(+slider.value))
slider.addEventListener('mousemove',() => updateValue(+slider.value))

// update the value of the slider in real time
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
let active;

// add Eventlistener to each button and run function with his id 
btns.forEach(btn => {
    btn.addEventListener('click',(e) => {
        active = e.target.id
        colorChange(active);
        clicked(active);
    })
})

// change currentColor value based on the button clicked
function colorChange(active) {
    switch (active) {
        case 'black':
            currentColor = 'black'
        break;
        case 'e':
            currentColor = 'antiquewhite'
        break;
        case 'clear':
            clear()
        break;
    }
}

// add class to only the active button
function clicked(active) {
    btns.forEach(btn => {
        if (btn.id === active) {
            btn.className = 'active'
        } else btn.className = ''
    })
}

// clear the grid 
function clear () {
    createLayout(+slider.value)
}

// update mouseDown value if mouse is done = true 
let mouseDown = false
document.addEventListener('mousedown',() => mouseDown = true);
document.addEventListener('mouseup',() => mouseDown = false);

// change color of grid elements if condition is true
function changeColor (e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (active === 'rgb') e.target.style.backgroundColor = `rgb(${getRgb()}, ${getRgb()}, ${getRgb()})`
    else e.target.style.backgroundColor = currentColor
}

// prevent mouse blocking
container.onmousedown = (e) => {
    mouseDown = true; 
    e.preventDefault();
};

// load at start default value
window.onload = () => {
    createLayout(+slider.value);
    updateValue(+slider.value)
}




