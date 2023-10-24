const numbers = document.querySelectorAll('.number')
numbers.forEach(number => {
    for (let i = 0; i <= 9; i++) {
        number.innerHTML += `<span class="number-${i}">${i}</span>`
    }
})


const pause = document.querySelector('.pause')
const play = document.querySelector('.play')

pause.addEventListener('click', () => {
    pause.style.transform = 'scale(0)'
    play.style.transform = 'scale(1)'
})
play.addEventListener('click', () => {
    play.style.transform = 'scale(0)'
    pause.style.transform = 'scale(1)'
})