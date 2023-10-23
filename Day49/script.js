const frame = document.querySelector('.frame')

for (let i = 1; i <= 400; i++){
    frame.innerHTML += `<a class="trigger trigger-${i}" href="#">`
}
frame.innerHTML += `<div class="mouseFollow"></div>`


let rows, columns, triggerSide = 20 
let row, column = 1
let x, y


for (let i = 1; i <= (rows * columns); i++) {
    if ((row * columns) < i) { row++ }
    column = i - ( (row - 1) * columns )
}
    
const triggers = document.querySelectorAll('.trigger')
const mouseFollow = document.querySelector('.mouseFollow')
triggers.forEach(trigger => {
    trigger.addEventListener('mouseover', e => {
        x = e.target.offsetLeft + 'px'
        y = e.target.offsetTop + 'px'
        mouseFollow.style.transform = `translate3d(${x}, ${y}, 0)`
    })
    trigger.addEventListener('mouseleave', e => {
        mouseFollow.style.transform = ``
    })
})
